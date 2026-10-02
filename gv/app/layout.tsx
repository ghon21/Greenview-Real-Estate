import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Greenview Real Estate | Clyde North Agents and Property Managers",
  description: "Sell, buy or rent with Clyde North's most respected real estate agents and property managers. Free appraisals.",
};

const schema = {
  "@context": "https://schema.org", "@type": "RealEstateAgent", name: "Greenview Real Estate",
  telephone: "+61 3 8650 3000", url: "https://greenviewre.com.au",
  address: { "@type": "PostalAddress", streetAddress: "3 Argon Circuit", addressLocality: "Clyde North", addressRegion: "VIC", postalCode: "3978", addressCountry: "AU" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "45" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        {children}
        <footer className="border-t border-line py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
            <div className="font-serif text-xl tracking-[.3em]">GREENVIEW<span className="block font-sans text-[.55rem] tracking-[.4em] text-muted">REAL ESTATE</span></div>
            <p className="text-muted">3 Argon Circuit<br />Clyde North VIC 3978<br /><a href="tel:+61386503000" className="underline">+61 3 8650 3000</a></p>
            <p className="text-muted">Open Monday to Friday from 9am.<br /><span className="text-sm">Privacy · Terms · Agency licence details</span></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
