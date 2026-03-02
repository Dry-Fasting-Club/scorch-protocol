import FaqNav from "@/components/FaqNav";

// Pages under this layout use cookies + DB — never pre-render statically
export const dynamic = "force-dynamic";

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FaqNav />
      <main>{children}</main>
    </>
  );
}
