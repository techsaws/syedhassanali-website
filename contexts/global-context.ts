"use client";

import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export type GlobalContextValue = {
  connectModal: boolean;
  setConnectModal: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

export function useGlobalContext(): GlobalContextValue {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within GlobalProvider.");
  }

  return context;
}
