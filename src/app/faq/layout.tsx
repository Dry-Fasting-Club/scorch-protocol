import FaqNav from "@/components/FaqNav";

// FAQ pages render statically (CDN-cached). Their paid-content block checks
// access client-side (PaidContentClient + /api/access), so nothing here reads
// the request.

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
