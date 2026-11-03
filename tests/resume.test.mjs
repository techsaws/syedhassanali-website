import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { NextRequest } from "next/server.js";
import nodemailer from "nodemailer";
const nodeRequire = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loader({ env = {}, mocks = {}, fetch: mockFetch } = {}) {
  const cache = new Map();
  function load(name) {
    if (Object.hasOwn(mocks, name)) return mocks[name];
    const file = name.startsWith("@/")
      ? path.join(root, name.slice(2) + ".ts")
      : path.join(root, name);
    if (cache.has(file)) return cache.get(file);
    const exports = {};
    cache.set(file, exports);
    const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    const context = {
      exports,
      Buffer,
      URL,
      Response,
      Request,
      AbortSignal,
      setTimeout,
      clearTimeout,
      process: { env: { NODE_ENV: "test", ...env }, cwd: () => root },
      fetch:
        mockFetch ||
        (() => {
          throw new Error("Network disabled in tests");
        }),
      console: { error() {} },
      require(specifier) {
        if (specifier === "server-only") return {};
        if (Object.hasOwn(mocks, specifier)) return mocks[specifier];
        if (specifier.startsWith("@/")) return load(specifier);
        if (specifier.startsWith("."))
          return load(
            path.relative(
              root,
              path.resolve(path.dirname(file), specifier + ".ts"),
            ),
          );
        return nodeRequire(specifier);
      },
    };
    vm.runInNewContext(code, context, { filename: file });
    return exports;
  }
  return load;
}

const mailEnv = {
  SMTP_USER: "sender@example.com",
  SMTP_PASS: "test-app-password",
  SMTP_HOST: "smtp.gmail.com",
  SMTP_PORT: "465",
};

test("email validation accepts a single mailbox and rejects injection, lists, and malformed addresses", () => {
  const { normalizeResumeEmail: normalize } = loader()(
    "lib/resume/validation.ts",
  );
  assert.equal(normalize(" User+work@Example.com "), "user+work@example.com");
  for (const input of [
    null,
    {},
    "",
    "a@b",
    "a..b@example.com",
    ".a@example.com",
    "a@-example.com",
    "a@example.com,b@example.com",
    "a@example.com\r\nBcc:x@example.com",
    "a".repeat(65) + "@example.com",
  ])
    assert.equal(normalize(input), null);
});

test("rate limiter enforces the per-client budget", async () => {
  const limiter = loader()("lib/resume/rate-limit.ts");
  for (let n = 0; n < 5; n++) await limiter.limitResumeRequests("test-client");
  await assert.rejects(
    limiter.limitResumeRequests("test-client"),
    (error) =>
      error instanceof limiter.ResumeRateLimited && error.retryAfter === 600,
  );
});

test("recipient lock prevents simultaneous sends and successful requests are deduplicated", async () => {
  const limiter = loader()("lib/resume/rate-limit.ts");
  const reservation = await limiter.reserveResumeDelivery("reader@example.com");
  assert.equal(reservation.alreadySent, false);
  await assert.rejects(
    limiter.reserveResumeDelivery("reader@example.com"),
    limiter.ResumeRateLimited,
  );
  await reservation.complete();
  await reservation.release();
  assert.equal(
    (await limiter.reserveResumeDelivery("reader@example.com")).alreadySent,
    true,
  );
});

test("failed sends release their reservation for a later retry", async () => {
  const limiter = loader()("lib/resume/rate-limit.ts");
  const reservation = await limiter.reserveResumeDelivery("reader@example.com");
  await reservation.release();
  assert.equal(
    (await limiter.reserveResumeDelivery("reader@example.com")).alreadySent,
    false,
  );
});

test("production sends do not require an external limiter", async () => {
  const limiter = loader({ env: { NODE_ENV: "production" } })(
    "lib/resume/rate-limit.ts",
  );
  await limiter.limitResumeRequests("test-client");
  assert.equal(
    (await limiter.reserveResumeDelivery("reader@example.com")).alreadySent,
    false,
  );
});

function routeHarness({
  alreadySent = false,
  fail = false,
  limited = false,
} = {}) {
  let sends = 0,
    releases = 0,
    completed = 0;
  const load = loader({
    env: { ...mailEnv, NEXT_PUBLIC_SITE_URL: "https://portfolio.example" },
    mocks: {
      "@/lib/resume/mail": {
        getResumeMailConfig() {},
        async sendResumeEmail() {
          sends++;
          if (fail)
            throw Object.assign(new Error("Private SMTP response"), {
              code: "EAUTH",
            });
        },
      },
    },
  });
  const limiter = load("lib/resume/rate-limit.ts");
  const reservation = {
    alreadySent,
    async complete() {
      completed++;
    },
    async release() {
      releases++;
    },
  };
  limiter.limitResumeRequests = async () => {
    if (limited) throw new limiter.ResumeRateLimited(60);
  };
  limiter.reserveResumeDelivery = async () => reservation;
  return {
    route: load("app/api/resume/route.ts"),
    stats: () => ({ sends, releases, completed }),
  };
}
function request(body, headers = {}) {
  return new NextRequest("https://portfolio.example/api/resume", {
    method: "POST",
    headers: {
      origin: "https://portfolio.example",
      "content-type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("API validates origin, content type, malformed JSON, payload size, and mailbox", async () => {
  const { route, stats } = routeHarness();
  assert.equal(
    (
      await route.POST(
        request(
          { email: "reader@example.com" },
          { origin: "https://other.example" },
        ),
      )
    ).status,
    403,
  );
  assert.equal(
    (await route.POST(request({}, { "content-type": "text/plain" }))).status,
    415,
  );
  assert.equal((await route.POST(request("{"))).status, 400);
  assert.equal(
    (await route.POST(request({ email: "not-an-email" }))).status,
    400,
  );
  assert.equal(
    (
      await route.POST(
        request({ email: "reader@example.com", padding: "x".repeat(2000) }),
      )
    ).status,
    400,
  );
  assert.equal(stats().sends, 0);
});

test("honeypot submissions do not send mail", async () => {
  const { route, stats } = routeHarness();
  assert.equal(
    (
      await route.POST(
        request({ email: "reader@example.com", website: "bot.example" }),
      )
    ).status,
    200,
  );
  assert.equal(stats().sends, 0);
});

test("successful API send completes the cooldown and returns no private information", async () => {
  const { route, stats } = routeHarness();
  const response = await route.POST(request({ email: "reader@example.com" }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(stats(), { sends: 1, releases: 1, completed: 1 });
  assert.match((await response.json()).message, /inbox/);
});

test("duplicate requests succeed without another email", async () => {
  const { route, stats } = routeHarness({ alreadySent: true });
  assert.equal(
    (await route.POST(request({ email: "reader@example.com" }))).status,
    200,
  );
  assert.equal(stats().sends, 0);
});

test("SMTP errors produce a retryable, sanitized response and release the lock", async () => {
  const { route, stats } = routeHarness({ fail: true });
  const response = await route.POST(request({ email: "reader@example.com" }));
  assert.equal(response.status, 503);
  assert.doesNotMatch(
    JSON.stringify(await response.json()),
    /EAUTH|Private SMTP|password/,
  );
  assert.deepEqual(stats(), { sends: 1, releases: 1, completed: 0 });
});

test("rate-limited requests include Retry-After without sending mail", async () => {
  const { route, stats } = routeHarness({ limited: true });
  const response = await route.POST(request({ email: "reader@example.com" }));
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("retry-after"), "60");
  assert.equal(stats().sends, 0);
});

test("email MIME contains the exact private resume PDF and both message formats without sending", async () => {
  const { createResumeMessage } = loader({ env: mailEnv })(
    "lib/resume/mail.ts",
  );
  const pdf = fs.readFileSync(path.join(root, "data/resume/resume-02.pdf"));
  const message = createResumeMessage("reader@example.com", pdf);
  assert.equal(message.attachments[0].content, pdf);
  assert.equal(message.attachments[0].filename, "Syed-Hassan-Ali-Resume.pdf");
  const transport = nodemailer.createTransport({
    streamTransport: true,
    buffer: true,
    newline: "unix",
  });
  const info = await transport.sendMail(message);
  const mime = info.message.toString();
  assert.match(mime, /Content-Type: application\/pdf/);
  assert.match(mime, /Content-Type: text\/plain/);
  assert.match(mime, /Content-Type: text\/html/);
  assert.ok(mime.replace(/\s/g, "").includes(pdf.toString("base64")));
});

test("internal notification includes requester, timezone, status and message ID", () => {
  const { createResumeNotificationMessage } = loader({
    env: {
      ...mailEnv,
      RESUME_NOTIFICATION_EMAIL: "owner@example.com",
      RESUME_NOTIFICATION_TIMEZONE: "Asia/Karachi",
    },
  })("lib/resume/mail.ts");
  const message = createResumeNotificationMessage({
    email: "reader@example.com",
    requestedAt: new Date("2026-10-27T12:00:00Z"),
    status: "accepted",
    messageId: "<test-message>",
  });
  assert.equal(message.to.address, "owner@example.com");
  assert.equal(message.replyTo.address, "reader@example.com");
  assert.match(message.text, /2026-10-27T12:00:00.000Z/);
  assert.match(message.text, /Asia\/Karachi/);
  assert.match(message.text, /accepted by Gmail/);
  assert.ok(message.html.includes("&lt;test-message&gt;"));
});

test("successful resume sends one internal notification without another PDF attachment", async () => {
  const messages = [];
  const { sendResumeEmail } = loader({
    env: mailEnv,
    mocks: {
      nodemailer: {
        createTransport: () => ({
          async sendMail(message) {
            messages.push(message);
            return { accepted: [message.to.address], messageId: "test-id" };
          },
          close() {},
        }),
      },
    },
  })("lib/resume/mail.ts");
  await sendResumeEmail("reader@example.com");
  assert.equal(messages.length, 2);
  assert.equal(messages[0].to.address, "reader@example.com");
  assert.equal(messages[1].to.address, "sender@example.com");
  assert.equal(messages[1].attachments, undefined);
  assert.match(messages[1].subject, /sent/);
});

test("notification failure does not fail an accepted visitor email", async () => {
  let sends = 0;
  const { sendResumeEmail } = loader({
    env: mailEnv,
    mocks: {
      nodemailer: {
        createTransport: () => ({
          async sendMail() {
            sends++;
            if (sends === 2) throw new Error("Notification failed");
            return { accepted: ["reader@example.com"], messageId: "test-id" };
          },
          close() {},
        }),
      },
    },
  })("lib/resume/mail.ts");
  await sendResumeEmail("reader@example.com");
  assert.equal(sends, 2);
});

test("resume send failure notifies the owner with a failure status", async () => {
  const messages = [];
  const { sendResumeEmail } = loader({
    env: mailEnv,
    mocks: {
      nodemailer: {
        createTransport: () => ({
          async sendMail(message) {
            messages.push(message);
            if (messages.length === 1)
              throw Object.assign(new Error("Send failed"), {
                code: "EENVELOPE",
              });
            return { accepted: ["sender@example.com"] };
          },
          close() {},
        }),
      },
    },
  })("lib/resume/mail.ts");
  await assert.rejects(sendResumeEmail("reader@example.com"));
  assert.equal(messages.length, 2);
  assert.match(messages[1].subject, /failed/);
  assert.match(messages[1].text, /EENVELOPE/);
});
