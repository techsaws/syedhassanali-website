"use client";

import toast from "react-hot-toast";

export const resumeToast = {
  loading: () => toast.loading("Sending your resume", { id: "resume-request" }),
  success: (message: string) =>
    toast.success(message, { id: "resume-request", duration: 6000 }),
  error: (message: string) =>
    toast.error(message, { id: "resume-request", duration: 6500 }),
};
