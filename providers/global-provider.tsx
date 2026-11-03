import type { ReactNode } from "react";

import GlobalContextProvider from "@/providers/provider/global-context-provider";
import LenisProvider from "@/providers/provider/lenis-provider";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <GlobalContextProvider>
      <LenisProvider>{children}</LenisProvider>
    </GlobalContextProvider>
  );
}
