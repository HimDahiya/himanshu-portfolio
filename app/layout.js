import { Outfit, Ovo } from "next/font/google";
import { Analytics }   from "@vercel/analytics/next";
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

/* ─── SEO metadata ────────────────────────────────────────── */
export const metadata = {
  title:       "Portfolio – Himanshu Dahiya",
  description: "Showcasing skills in data analytics, project management, and web development.",
  keywords:    [
    "Himanshu Dahiya",
    "portfolio",
    "data analytics",
    "project management",
    "web development",
  ],
  authors: [
    { name: "Himanshu Dahiya", url: "https://himanshu-portfolio.com" },
  ],
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
      </body>
    </html>
  );
}
