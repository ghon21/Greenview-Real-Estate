"use client";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -70]);
  const yBack = useTransform(scrollY, [0, 600], [0, 40]);
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }} className="text-5xl sm:text-6xl lg:text-7xl">
          Clyde North’s most respected agents.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 max-w-md text-lg text-muted">
          Local market knowledge, fast communication and honest advice, from your first appraisal to the day you get the keys.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-9 flex flex-wrap gap-3">
          <a href="#appraisal" className="btn">Get a free appraisal</a><a href="#buy" className="btn-ghost">Search properties</a>
        </motion.div>
        <div className="mt-12 flex gap-10 border-t border-line pt-8">
          {[["4.3", "Google rating"], ["45", "Google reviews"], ["3", "Suburbs we know best"]].map(([n, l]) => (
            <div key={l}><b className="block font-serif text-4xl font-medium leading-none">{n}</b><span className="text-sm text-muted">{l}</span></div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md" aria-hidden>
        <motion.div style={{ y: yBack }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }}
          className="relative flex h-[540px] items-end justify-center overflow-hidden rounded-t-[999px] bg-gradient-to-b from-sage to-sage-d">
          <div className="absolute inset-4 rounded-t-[999px] border border-white/50" />
          <motion.div style={{ y }} className="relative mb-0 w-3/5 rounded-t-md bg-white px-5 pb-6 pt-8 text-center text-forest shadow-2xl">
            <div className="font-serif text-lg tracking-[.3em]">GREENVIEW<span className="block font-sans text-[.5rem] tracking-[.4em]">REAL ESTATE</span></div>
            <div className="my-5 h-40 rounded bg-gradient-to-br from-[#e8eee8] to-[#c9d6ca]" />
            <motion.span initial={{ scale: 1.8, rotate: -8, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ delay: 1, type: "spring", stiffness: 260, damping: 14 }}
              className="absolute -left-5 bottom-14 rounded-l-md rounded-r-full bg-sage-d py-1.5 pl-5 pr-9 font-serif text-3xl tracking-[.2em] text-white">SOLD</motion.span>
            <p className="text-[.65rem] text-muted">Clyde North · Cranbourne · Cranbourne North</p>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className="absolute -left-4 top-24 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg sm:-left-10">
          <div className="text-amber-500">★★★★★</div><div className="text-sm text-muted">4.3 from 45 Google reviews</div>
        </motion.div>
      </div>
    </section>
  );
}
