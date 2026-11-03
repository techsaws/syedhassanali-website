import type { ReactNode } from "react";

import { Header02 } from "@/components/layouts/headers";
import Footer from "@/components/layouts/footer";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header02 />
      {children}
      <Footer />
    </>
  );
}
