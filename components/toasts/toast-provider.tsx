"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{ zIndex: 200 }}
      toastOptions={{
        duration: 5000,
        style: { background: "var(--card)", color: "var(--heading)", border: "1px solid var(--border)", borderRadius: "14px", padding: "14px 18px", maxWidth: "min(420px, calc(100vw - 32px))", fontSize: "14px", lineHeight: "1.5" },
        success: { iconTheme: { primary: "var(--primary)", secondary: "var(--primary-foreground)" } },
        error: { duration: 6500 },
      }}
    />
  );
}
