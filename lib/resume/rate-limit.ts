import "server-only";
import { createHash, randomUUID } from "node:crypto";

export class ResumeServiceUnavailable extends Error {}
export class ResumeRateLimited extends Error {
  constructor(public retryAfter: number) { super("Too many requests"); }
}

type Entry = { value: string; expiresAt: number };
const entries = new Map<string, Entry>();
const hash = (value: string) => createHash("sha256").update(value).digest("hex");

function cleanup() {
  const now = Date.now();
  for (const [key, entry] of entries) if (entry.expiresAt <= now) entries.delete(key);
}
function store(key: string, value: string, expiresAt: number) {
  if (!entries.has(key) && entries.size >= 10000) throw new ResumeServiceUnavailable("Limiter full");
  entries.set(key, { value, expiresAt });
}

// Minimal per-process protection; no database or external service required.
export async function limitResumeRequests(identity: string) {
  cleanup();
  const now = Date.now();
  for (const [key, max, seconds] of [
    ["global:hour", 20, 3600], ["global:day", 100, 86400],
    [`client:${hash(identity)}`, 5, 600],
  ] as const) {
    const entry = entries.get(key);
    const count = Number(entry?.value ?? 0) + 1;
    const expiresAt = entry?.expiresAt ?? now + seconds * 1000;
    store(key, String(count), expiresAt);
    if (count > max) throw new ResumeRateLimited(Math.max(1, Math.ceil((expiresAt - now) / 1000)));
  }
}

export async function reserveResumeDelivery(email: string) {
  cleanup();
  const key = `recipient:${hash(email)}`;
  if (entries.has(`${key}:sent`)) return { alreadySent: true as const };
  if (entries.has(`${key}:lock`)) throw new ResumeRateLimited(120);
  const owner = randomUUID();
  store(`${key}:lock`, owner, Date.now() + 120000);
  return {
    alreadySent: false as const,
    async complete() { store(`${key}:sent`, "1", Date.now() + 900000); },
    async release() {
      if (entries.get(`${key}:lock`)?.value === owner) entries.delete(`${key}:lock`);
    },
  };
}
