import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

/**
 * PageShell — lightweight content wrapper.
 * Navbar and Footer live in the root layout and never re-mount between
 * navigations. This component exists only as a stable slot for future
 * per-page wrappers (e.g. page transitions, breadcrumbs).
 */
export function PageShell({ children }: PageShellProps) {
  return <>{children}</>;
}
