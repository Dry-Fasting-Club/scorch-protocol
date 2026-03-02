import { redirect } from "next/navigation";
import { getAdminFromCookie } from "@/lib/auth";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminId = await getAdminFromCookie();
  if (!adminId) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>⚡ Admin Panel</h2>
        <nav>
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/blog">Blog Posts</Link>
          <Link href="/admin/comments">Comments</Link>
          <Link href="/admin/sections">Sections</Link>
        </nav>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
