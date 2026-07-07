import MainNav from "@/components/MainNav";
import ProgressBar from "@/components/ProgressBar";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AuthorByline from "@/components/AuthorByline";
import Footer from "@/components/Footer";

// Pages under this layout use cookies + DB - never pre-render statically
export const dynamic = "force-dynamic";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ProgressBar />
      <MainNav />
      <main id="main-content" tabIndex={-1}>
        {children}
        <AuthorByline />
        <MedicalDisclaimer />
      </main>
      <Footer />
    </>
  );
}
