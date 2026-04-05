import MainNav from "@/components/MainNav";
import ProgressBar from "@/components/ProgressBar";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

// Pages under this layout use cookies + DB - never pre-render statically
export const dynamic = "force-dynamic";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressBar />
      <MainNav />
      <main>
        {children}
        <MedicalDisclaimer />
      </main>
    </>
  );
}
