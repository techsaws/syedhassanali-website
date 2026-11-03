import "server-only";
import nodemailer, { type SendMailOptions } from "nodemailer";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { normalizeResumeEmail } from "./validation";

export function getResumeMailConfig() {
  const user = normalizeResumeEmail(process.env.SMTP_USER);
  const pass = process.env.SMTP_PASS?.replace(/\s/g, "");
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  if (!user || !pass || ![465, 587].includes(port)) throw new Error("Resume email is not configured");
  return { user, pass, host, port };
}

export function createResumeMessage(email: string, pdf: Buffer): SendMailOptions {
  const { user } = getResumeMailConfig();
  return {
    from: { name: process.env.SMTP_FROM_NAME?.trim() || "Syed Hassan Ali", address: user },
    to: { address: email, name: "" },
    replyTo: { address: normalizeResumeEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL) || user, name: "Syed Hassan Ali" },
    subject: "Your requested resume - Syed Hassan Ali",
    text: "Hi,\n\nThank you for your interest in my work. My resume is attached to this email.\n\nIf you would like to discuss a project or opportunity, simply reply to this email.\n\nBest regards,\nSyed Hassan Ali\nFull-Stack Software Engineer\n\nYou received this email because a resume was requested for this address on my portfolio.",
    html: `<div style="font-family:Arial,sans-serif;line-height:1.7;color:#182018;max-width:560px;margin:auto;padding:28px"><div style="height:5px;width:64px;background:#a3ff00;border-radius:4px;margin-bottom:24px"></div><h1 style="font-size:24px;line-height:1.3">Your copy of my resume</h1><p>Hi,</p><p>Thank you for your interest in my work. My resume is attached to this email.</p><p>If you would like to discuss a project or opportunity, simply reply to this email.</p><p>Best regards,<br><strong>Syed Hassan Ali</strong><br>Full-Stack Software Engineer</p><p style="font-size:12px;color:#657065;border-top:1px solid #e2e6e0;padding-top:18px">You received this email because a resume was requested for this address on my portfolio.</p></div>`,
    attachments: [{ filename: "Syed-Hassan-Ali-Resume.pdf", content: pdf, contentType: "application/pdf", contentDisposition: "attachment" }],
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}

type ResumeNotification = {
  email: string;
  requestedAt: Date;
  status: "accepted" | "failed" | "unconfirmed";
  messageId?: string;
  failureCode?: string;
};
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);

export function createResumeNotificationMessage(notification: ResumeNotification): SendMailOptions {
  const { user } = getResumeMailConfig();
  const recipient = normalizeResumeEmail(process.env.RESUME_NOTIFICATION_EMAIL) || user;
  let timezone = process.env.RESUME_NOTIFICATION_TIMEZONE?.trim() || "Asia/Karachi";
  let localTime: string;
  try { localTime = new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "long", timeZone: timezone }).format(notification.requestedAt); }
  catch { timezone = "UTC"; localTime = notification.requestedAt.toISOString(); }
  const status = notification.status === "accepted" ? "Resume accepted by Gmail for sending" : notification.status === "unconfirmed" ? "Sending could not be confirmed" : "Resume sending failed";
  const fields = [
    ["Requester email", notification.email],
    ["Requested at", `${localTime} (${timezone})`],
    ["Requested at (UTC)", notification.requestedAt.toISOString()],
    ["Status", status],
    ["Status recorded at (UTC)", new Date().toISOString()],
    ["Resume", "resume-02.pdf"],
    ...(notification.messageId ? [["SMTP message ID", notification.messageId]] : []),
    ...(notification.failureCode ? [["Error code", notification.failureCode]] : []),
  ];
  return {
    from: { name: process.env.SMTP_FROM_NAME?.trim() || "Syed Hassan Ali", address: user },
    to: { address: recipient, name: "Syed Hassan Ali" },
    replyTo: { address: notification.email, name: "" },
    subject: `Portfolio resume request - ${notification.status === "accepted" ? "sent" : notification.status}`,
    text: "Portfolio resume request\n\n" + fields.map(([label, value]) => `${label}: ${value}`).join("\n") + "\n\nSMTP acceptance does not guarantee inbox delivery. This notification is your internal request record.",
    html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#182018;max-width:620px;margin:auto;padding:28px"><div style="height:5px;width:64px;background:#a3ff00;border-radius:4px;margin-bottom:24px"></div><h1 style="font-size:24px">New resume request</h1><table style="width:100%;border-collapse:collapse">${fields.map(([label, value]) => `<tr><th style="padding:12px 8px;text-align:left;vertical-align:top;border-bottom:1px solid #e2e6e0;font-size:13px">${escapeHtml(label)}</th><td style="padding:12px 8px;border-bottom:1px solid #e2e6e0;word-break:break-word;font-size:14px">${escapeHtml(value)}</td></tr>`).join("")}</table><p style="font-size:12px;color:#657065">SMTP acceptance does not guarantee inbox delivery. This notification is your internal request record.</p></div>`,
    disableFileAccess: true, disableUrlAccess: true,
  };
}

function createTransport(notification = false) {
  const config = getResumeMailConfig();
  return nodemailer.createTransport({
    host: config.host, port: config.port, secure: config.port === 465, requireTLS: true,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: notification ? 4000 : 8000,
    greetingTimeout: notification ? 4000 : 8000,
    socketTimeout: notification ? 6000 : 15000,
    tls: { minVersion: "TLSv1.2" }, logger: false, debug: false,
  });
}

async function notifyOwner(notification: ResumeNotification) {
  const transport = createTransport(true);
  try {
    const info = await transport.sendMail(createResumeNotificationMessage(notification));
    if (!info.accepted?.length) throw new Error("Notification recipient not accepted");
  } catch {
    // Never make the visitor resend an already accepted resume because tracking failed.
    console.error("Resume owner notification failed");
  } finally { transport.close(); }
}

export async function sendResumeEmail(email: string) {
  const requestedAt = new Date();
  const transporter = createTransport();
  let notification: ResumeNotification;
  try {
    const pdf = await readFile(path.join(process.cwd(), "data", "resume", "resume-02.pdf"));
    if (pdf.length > 5 * 1024 * 1024 || pdf.subarray(0, 5).toString() !== "%PDF-") throw new Error("Resume attachment is unavailable");
    const info = await transporter.sendMail(createResumeMessage(email, pdf));
    if (!info.accepted?.length) throw new Error("Recipient was not accepted");
    notification = { email, requestedAt, status: "accepted", messageId: info.messageId };
  } catch (error) {
    const code = error && typeof error === "object" && "code" in error ? String(error.code) : "RESUME_SEND_FAILED";
    await notifyOwner({ email, requestedAt, status: ["ETIMEDOUT", "ESOCKET"].includes(code) ? "unconfirmed" : "failed", failureCode: code });
    throw error;
  } finally { transporter.close(); }
  await notifyOwner(notification);
}
