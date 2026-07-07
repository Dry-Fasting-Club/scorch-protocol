/**
 * Layout for static trust/policy pages (About, Contact, Privacy, Terms,
 * Medical Disclaimer, Editorial Policy). Uses the horizontal TopNav + Footer,
 * without the protocol sidebar or the per-page author byline.
 */
import TopNav from "@/components/TopNav";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-wrapper">
      <ProgressBar />
      <TopNav />
      <main className="blog-main">
        <div className="static-page">{children}</div>
        <MedicalDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
