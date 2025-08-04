import { Outfit, Ovo } from "next/font/google";
import { Analytics }   from "@vercel/analytics/next";
import Script from "next/script"; 
import "./globals.css";

/* ─── Google fonts ────────────────────────────────────────── */
const outfit = Outfit({
  subsets: ["latin"],
  weight:  ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight:  ["400"],
});

export const metadata = {
  title:       "Himanshu Dahiya · Data & AI Portfolio",
  description: "AI-powered pipelines, real-time dashboards, and case studies in cloud BI.",
  keywords: [
    "Himanshu Dahiya",
    "data analyst",
    "portfolio",
    "Snowflake",
    "Power BI",
    "Python",
  ],

  authors: [
    { name: "Himanshu Dahiya", url: "https://himanshudahiya.dev" },
  ],

  alternates: {
    canonical: "https://himanshudahiya.dev",
  },

  openGraph: {
    title:       "Himanshu Dahiya · Data & AI Portfolio",
    description: "AI-powered pipelines, real-time dashboards, and supply-chain case studies.",
    url:         "https://himanshudahiya.dev",
    siteName:    "Himanshu Dahiya Portfolio",
    images: [
      {
        url:   "/og-banner.png",  // stays in /public, path unchanged
        width: 1200,
        height: 630,
        alt:   "Screenshot of Himanshu's portfolio homepage",
      },
    ],
    locale: "en_US",
    type:   "website",
  },

  twitter: {
    card:    "summary_large_image",
    creator: "@yourHandle",          // change or remove
    images:  ["/og-banner.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className}
                    antialiased leading-8 overflow-x-hidden
                    dark:bg-darkTheme dark:text-white`}
      >
        {children}
        <Analytics /> {/* Vercel analytics – keep at very end */}
        import { track } from '@vercel/analytics';

<a
  href="/resume.pdf"
  download
  onClick={() => track('resume_download')}
  className="…"
>
  Download Résumé
</a>

<Script
  id="ld-json"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type":   "Person",
      name:      "Himanshu Dahiya",
      jobTitle:  "Data & AI Analyst",
      url:       "https://himanshu-portfolio-navy.vercel.app",
      sameAs: [
        "https://github.com/HimDahiya",
        "https://www.linkedin.com/in/himdahiya",
      ],
    }),
  }}
/>
      </body>
    </html>
  );
}
