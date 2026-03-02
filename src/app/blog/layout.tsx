/**
 * app/blog/layout.tsx
 * Layout for all blog pages.
 * Uses TopNav (horizontal) instead of MainNav (sidebar).
 * force-dynamic because blog post views are tracked per-request.
 */

import TopNav from "@/components/TopNav";
import ProgressBar from "@/components/ProgressBar";

export const dynamic = "force-dynamic";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-wrapper">
      <ProgressBar />
      <TopNav />
      <main className="blog-main">{children}</main>
    </div>
  );
}
