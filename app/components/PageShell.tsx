import { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
