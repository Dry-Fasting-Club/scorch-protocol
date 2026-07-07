import { CONTACT_EMAIL } from "@/lib/constants";

/**
 * Site footer — identity, trust/policy links, and contact. Rendered on every
 * layout so the site has a clear owner, a visible contact, and reachable
 * About/Privacy/Terms/Disclaimer pages (E-E-A-T + basic compliance).
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <span className="site-footer-name">The Scorch Protocol</span>
          <p>
            A data-driven metabolic recovery protocol for ME/CFS and Long Covid,
            built on dry fasting, T3 therapy, and hGH. Educational information,
            not medical advice.
          </p>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          <div className="site-footer-col">
            <span className="site-footer-h">Protocol</span>
            <a href="/">Overview</a>
            <a href="/preparation">Start here</a>
            <a href="/success-rate-data">Results</a>
            <a href="/faq">FAQ</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="site-footer-col">
            <span className="site-footer-h">Trust</span>
            <a href="/about">About Yannick</a>
            <a href="/research">Research &amp; citations</a>
            <a href="/editorial-policy">Editorial policy</a>
            <a href="/medical-disclaimer">Medical disclaimer</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="site-footer-col">
            <span className="site-footer-h">Legal</span>
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms of use</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href="https://dryfastingclub.com" rel="me noopener" target="_blank">
              Dry Fasting Club
            </a>
          </div>
        </nav>
      </div>
      <div className="site-footer-bottom">
        <span>© {year} The Scorch Protocol. All rights reserved.</span>
        <span>
          Educational content only. Not a substitute for professional medical care.
        </span>
      </div>
    </footer>
  );
}
