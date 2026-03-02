import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Main protocol pages
      { source: "/index.html",                destination: "/",                    permanent: true },
      { source: "/decision-tree.html",        destination: "/decision-tree",       permanent: true },
      { source: "/preparation.html",          destination: "/preparation",         permanent: true },
      { source: "/dry-fasting.html",          destination: "/dry-fasting",         permanent: true },
      { source: "/refeeding.html",            destination: "/refeeding",           permanent: true },
      { source: "/t3-therapy.html",           destination: "/t3-therapy",          permanent: true },
      { source: "/hgh-therapy.html",          destination: "/hgh-therapy",         permanent: true },
      { source: "/symptom-management.html",   destination: "/symptom-management",  permanent: true },
      { source: "/weight-loss.html",          destination: "/weight-loss",         permanent: true },
      { source: "/genetic-polymorphisms.html",destination: "/genetic-polymorphisms",permanent: true },
      { source: "/tips-and-tricks.html",      destination: "/tips-and-tricks",     permanent: true },
      { source: "/Success-Rate-Data.html",    destination: "/success-rate-data",   permanent: true },
      { source: "/Refeed-for-BMR.html",       destination: "/refeed-for-bmr",      permanent: true },
      { source: "/list-of-pharmacies.html",   destination: "/list-of-pharmacies",  permanent: true },
      { source: "/random-thoughts.html",      destination: "/random-thoughts",     permanent: true },
      // FAQ — legacy root-level FAQ.html → /faq
      { source: "/FAQ.html",                  destination: "/faq",                 permanent: true },
      // FAQ sub-pages
      { source: "/FAQ/index.html",            destination: "/faq",                 permanent: true },
      { source: "/FAQ/General%20Questions.html", destination: "/faq/general-questions", permanent: true },
      { source: "/FAQ/autophagy.html",        destination: "/faq/autophagy",       permanent: true },
      { source: "/FAQ/refeeding.html",        destination: "/faq/refeeding",       permanent: true },
      { source: "/FAQ/kidneys.html",          destination: "/faq/kidneys",         permanent: true },
      { source: "/FAQ/liver.html",            destination: "/faq/liver",           permanent: true },
    ];
  },
};

export default nextConfig;
