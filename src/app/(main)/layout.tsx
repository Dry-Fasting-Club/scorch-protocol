import MainNav from "@/components/MainNav";
import ProgressBar from "@/components/ProgressBar";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AuthorByline from "@/components/AuthorByline";
import Footer from "@/components/Footer";

// No blanket dynamic directive: these pages render statically (CDN-cached). The
// paid-content lock/unlock is checked client-side (PaidContentClient + /api/access),
// so nothing here reads the request. The one page that truly needs the request
// (purchase/success: Stripe + cookies) declares its own `dynamic = "force-dynamic"`.

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
        {/* Footer lives INSIDE <main> here: this layout is a bare fragment, so a
            <Footer /> sibling would become a second flex-row child of the flex
            <body> and sit BESIDE the content (squishing it) instead of below.
            Inside <main> it flows below the content and inherits the sidebar
            clearance. (The blog/(pages) layouts wrap in .blog-wrapper, so their
            footer is full-width there.) */}
        <Footer />
      </main>
    </>
  );
}
