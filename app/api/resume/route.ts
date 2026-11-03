import { NextRequest } from "next/server";
import { isIP } from "node:net";
import { getResumeMailConfig, sendResumeEmail } from "@/lib/resume/mail";
import { normalizeResumeEmail } from "@/lib/resume/validation";
import { limitResumeRequests, reserveResumeDelivery, ResumeRateLimited, ResumeServiceUnavailable } from "@/lib/resume/rate-limit";

export const maxDuration = 60;
const successMessage = "Your resume request was accepted. Check your inbox and spam folder.";
const reply = (message: string, status: number, headers: Record<string, string> = {}) => Response.json({ message }, { status, headers: { "Cache-Control": "no-store", ...headers } });

async function readBody(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 1024) throw new Error("Body too large");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("Missing body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  const timer = setTimeout(() => { void reader.cancel(); }, 5000);
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 1024) { await reader.cancel(); throw new Error("Body too large"); }
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString("utf8")) as unknown;
  } finally { clearTimeout(timer); reader.releaseLock(); }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim()
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : request.nextUrl.origin;
  if (!origin || ![allowedOrigin, ...(process.env.NODE_ENV !== "production" ? [request.nextUrl.origin] : [])].includes(origin)) return reply("Please submit this form from the website.", 403);
  if (request.headers.get("sec-fetch-site") === "cross-site") return reply("Please submit this form from the website.", 403);
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return reply("Please submit a valid request.", 415);
  let body: unknown;
  try { body = await readBody(request); } catch { return reply("Please submit a valid request.", 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return reply("Please submit a valid request.", 400);
  const { email: rawEmail, website } = body as Record<string, unknown>;
  if (typeof website === "string" && website.length) return reply(successMessage, 200);
  const email = normalizeResumeEmail(rawEmail);
  if (!email) return reply("Please enter a valid email address.", 400);
  let reservation: Awaited<ReturnType<typeof reserveResumeDelivery>> | undefined;
  let sent = false;
  let uncertain = false;
  try {
    getResumeMailConfig();
    const forwarded = process.env.RESUME_TRUST_PROXY === "true" ? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() : undefined;
    const identity = forwarded && isIP(forwarded) ? forwarded : "untrusted-proxy";
    await limitResumeRequests(identity);
    reservation = await reserveResumeDelivery(email);
    if (reservation.alreadySent) return reply(successMessage, 200);
    await sendResumeEmail(email);
    sent = true;
    await reservation.complete();
    return reply(successMessage, 200);
  } catch (error) {
    // SMTP acceptance must not be reported as a failure if bookkeeping later fails.
    if (sent) return reply(successMessage, 200);
    if (error instanceof ResumeRateLimited) return reply("Please wait before requesting another copy.", 429, { "Retry-After": String(error.retryAfter) });
    if (error instanceof ResumeServiceUnavailable) return reply("Resume delivery is temporarily unavailable. Please email me directly.", 503);
    const code = error && typeof error === "object" && "code" in error ? String(error.code) : "RESUME_SEND_FAILED";
    console.error("Resume delivery failed", { code });
    if (["ETIMEDOUT", "ESOCKET"].includes(code)) {
      uncertain = true;
      return reply("Delivery could not be confirmed. Check your inbox and wait two minutes before trying again.", 504);
    }
    return reply("The resume could not be sent. Please try again later or email me directly.", 503);
  } finally {
    if (reservation && !reservation.alreadySent && !uncertain) {
      try { await reservation.release(); } catch { /* Lock expires automatically. */ }
    }
  }
}
