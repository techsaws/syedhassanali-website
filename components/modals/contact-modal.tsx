"use client";

import { useRef, useState, type SubmitEvent } from "react";

import { useGlobalContext } from "@/contexts/global-context";

import { modalSocialLinks } from "@/data/components.modal-data";

import { resumeToast } from "@/components/toasts/resume-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  X,
} from "lucide-react";

export default function ContactModal() {
  const { connectModal, setConnectModal } = useGlobalContext();
  const [step, setStep] = useState<"options" | "resume">("options");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [resumeRequested, setResumeRequested] = useState(false);
  const requestInFlight = useRef(false);
  const formSession = useRef(0);
  const emailLink = modalSocialLinks.find(
    (link) => link.label === "Email",
  )?.href;
  const phoneLink = modalSocialLinks.find(
    (link) => link.label === "Call",
  )?.href;
  const optionClass =
    "group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-colors hover:border-primary/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-5";

  async function requestResume(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (requestInFlight.current || resumeRequested) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const session = formSession.current;
    requestInFlight.current = true;
    setSending(true);
    setError("");
    resumeToast.loading();
    try {
      const response = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website: new FormData(form).get("website") || "" }),
        signal: AbortSignal.timeout(60000),
      });
      const data = await response.json().catch(() => null) as { message?: string } | null;
      if (!response.ok) throw new Error(data?.message || "The resume could not be sent. Please try again later.");
      setResumeRequested(true);
      resumeToast.success(data?.message || "Your resume is on its way. Check your inbox and spam folder.");
      if (formSession.current === session) { setEmail(""); setStep("options"); }
    } catch (error) {
      const message = error instanceof DOMException && error.name === "TimeoutError"
        ? "Delivery is taking longer than expected. Check your inbox before requesting again."
        : error instanceof TypeError
          ? "Could not connect. Please check your internet connection and try again."
          : error instanceof Error ? error.message : "The resume could not be sent. Please try again later.";
      if (formSession.current === session) setError(message);
      resumeToast.error(message);
    } finally {
      requestInFlight.current = false;
      setSending(false);
    }
  }

  return (
    <Dialog
      open={connectModal}
      onOpenChange={(open) => {
        if (!open) formSession.current += 1;
        setConnectModal(open);
      }}
      onOpenChangeComplete={(open) => {
        if (!open) {
          setStep("options");
          setEmail("");
          setError("");
        }
      }}
    >
      <DialogContent
        unstyled
        showCloseButton={false}
        overlayClassName="fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
        data-lenis-prevent
        className="fixed top-1/2 left-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/15 bg-dth-card p-6 text-white shadow-[0_24px_100px_rgba(0,0,0,0.45)] outline-none transition-[opacity,scale] duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-none sm:p-8"
      >
        <DialogClose
          aria-label="Close contact dialog"
          className="absolute top-4 right-4 grid size-10 place-items-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-primary"
        >
          <X className="size-5" />
        </DialogClose>
        {step === "resume" && (
          <button
            type="button"
            onClick={() => {
              setStep("options");
              setError("");
            }}
            className="mb-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="size-4" /> Back
          </button>
        )}
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          {step === "options" ? "Let's connect" : "Resume request"}
        </p>
        <DialogTitle className="pr-8 text-dth-heading font-heading text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl">
          {step === "options"
            ? "Let's talk about your project."
            : "Get a copy of my resume."}
        </DialogTitle>
        <DialogDescription className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          {step === "options"
            ? "Have something in mind? Reach out however you prefer. No technical details needed."
            : "Enter your email and I'll send you a copy."}
        </DialogDescription>
        {step === "options" ? (
          <div className="mt-7 space-y-3">
            {emailLink && (
              <a href={emailLink} className={optionClass}>
                <Mail
                  aria-hidden="true"
                  className="size-6 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-lg font-semibold">
                    Send me an email
                  </span>
                  <span className="mt-1 block break-all text-xs text-white/65 sm:text-sm">
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-white/60"
                />
              </a>
            )}
            {phoneLink && (
              <a href={phoneLink} className={optionClass}>
                <Phone
                  aria-hidden="true"
                  className="size-6 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                <span className="flex-1">
                  <span className="block font-heading text-lg font-semibold">
                    Give me a call
                  </span>
                  <span className="mt-1 block text-xs text-white/65 sm:text-sm">
                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 text-white/60"
                />
              </a>
            )}
            <button
              type="button"
              onClick={() => setStep("resume")}
              disabled={sending || resumeRequested}
              className={`${optionClass} disabled:cursor-not-allowed disabled:opacity-60`}
            >
              <Download
                aria-hidden="true"
                className="size-6 shrink-0 text-primary"
                strokeWidth={1.75}
              />
              <span className="flex-1">
                <span className="block font-heading text-lg font-semibold">
                  {resumeRequested ? "Resume requested" : "Request my resume"}
                </span>
                <span className="mt-1 block text-xs text-white/65 sm:text-sm">
                  {resumeRequested ? "Check your inbox and spam folder." : "Get a copy sent to your email."}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 text-white/60"
              />
            </button>
          </div>
        ) : (
          <form onSubmit={requestResume} className="mt-7" aria-busy={sending}>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="resume-website">Website</label>
              <input id="resume-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <label
              htmlFor="resume-email"
              className="mb-2 block text-sm font-medium"
            >
              Email address
            </label>
            <input
              id="resume-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              disabled={sending || resumeRequested}
              aria-invalid={Boolean(error)}
              maxLength={254}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="you@company.com"
              aria-describedby={
                error ? "resume-note resume-error" : "resume-note"
              }
              className="h-12 w-full rounded-xl border border-white/20 bg-white/5 px-4 text-base text-white outline-none placeholder:text-white/35 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p id="resume-note" className="mt-2 text-xs leading-relaxed text-white/65">
              Your email is used only to send this requested resume. Check your spam folder if needed.
            </p>
            {error && (
              <p
                id="resume-error"
                role="alert"
                className="mt-4 text-sm leading-relaxed text-white/85"
              >
                {error}{" "}
                {emailLink && (
                  <a
                    href={emailLink}
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    Email me
                  </a>
                )}
              </p>
            )}
            <Button
              type="submit"
              disabled={sending || resumeRequested}
              className="mt-5 h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              {sending ? "Sending resume" : resumeRequested ? "Resume requested" : "Request my resume"}{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
