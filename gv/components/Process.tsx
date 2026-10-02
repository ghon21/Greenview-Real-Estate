"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { steps } from "@/lib/data";
export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <section id="sell" className="bg-forest py-24 text-bone">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div><h2 className="text-4xl sm:text-5xl">What happens when you list with us</h2>
          <p className="mt-5 max-w-md text-lg opacity-85">You know what is happening with your campaign at every stage. One named agent, one backup, and an update every week.</p></div>
        <div ref={ref} className="relative pl-10">
          <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-white/20" />
          <motion.div style={{ scaleY, originY: 0 }} className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-sage" />
          {steps.map(([t, d]) => (
            <div key={t} className="relative pb-10 last:pb-0"><span className="absolute -left-[46px] top-2 h-3 w-3 rounded-full bg-sage" /><h3 className="text-2xl">{t}</h3><p className="mt-1 opacity-80">{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
