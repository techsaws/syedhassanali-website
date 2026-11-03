"use client";

import ToastProvider from "@/components/toasts/toast-provider";

import { useMemo, useState, type ReactNode } from "react";

import ContactModal from "@/components/modals/contact-modal";

import {
  GlobalContext,
  type GlobalContextValue,
} from "@/contexts/global-context";

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [connectModal, setConnectModal] = useState(false);
  const value = useMemo<GlobalContextValue>(
    () => ({ connectModal, setConnectModal }),
    [connectModal],
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
      <ContactModal />
      <ToastProvider />
    </GlobalContext.Provider>
  );
}
