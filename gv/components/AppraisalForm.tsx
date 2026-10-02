"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function AppraisalForm() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setState("sending");
    const data = Object.fromEntries(new URLSearchParams(new FormData(e.currentTarget) as any));
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Something went wrong.");
      setState("done");
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong."); setState("idle"); }
  }
  return (
    <div className="rounded-3xl border border-line bg-white p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {state !== "done" ? (
          <motion.form key="f" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} className="grid gap-4">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <label className="grid gap-1 text-sm text-muted">Property address<input name="address" required minLength={5} autoComplete="street-address" className="field" /></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 text-sm text-muted">Your name<input name="name" required autoComplete="name" className="field" /></label>
              <label className="grid gap-1 text-sm text-muted">Mobile<input name="phone" type="tel" required autoComplete="tel" className="field" /></label>
            </div>
            <label className="grid gap-1 text-sm text-muted">Email<input name="email" type="email" required autoComplete="email" className="field" /></label>
            <label className="grid gap-1 text-sm text-muted">When are you thinking of selling?
              <select name="timeframe" className="field"><option>As soon as possible</option><option>Within 3 months</option><option>Within 6 months</option><option>Just curious</option></select></label>
            <input type="hidden" name="type" value="sell" />
            <p role="alert" className="min-h-5 text-sm text-red-700">{error}</p>
            <button disabled={state === "sending"} className="btn disabled:opacity-60">{state === "sending" ? "Sending…" : "Request my appraisal"}</button>
          </motion.form>
        ) : (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} role="status" className="py-10 text-center">
            <h3 className="text-3xl">Request received</h3>
            <p className="mx-auto mt-3 max-w-sm text-muted">One of our agents will call you on the number you gave us. After-hours requests are answered first thing the next business day.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
