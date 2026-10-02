"use client";
import { useEffect, useState } from "react";
const links = [["Sell", "#sell"], ["Buy", "#buy"], ["Property management", "#rent"], ["Team", "#team"], ["Reviews", "#reviews"]];
export default function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 24); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <header className={`sticky top-0 z-30 transition ${solid ? "border-b border-line bg-bone/85 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl tracking-[.3em]">GREENVIEW<span className="block font-sans text-[.55rem] tracking-[.4em] text-muted">REAL ESTATE</span></a>
        <nav className="hidden gap-8 text-sm text-muted md:flex">{links.map(([l, h]) => <a key={h} href={h} className="transition hover:text-ink">{l}</a>)}</nav>
        <a href="tel:+61386503000" className="btn !px-5 !py-2.5 text-sm">03 8650 3000</a>
      </div>
    </header>
  );
}
