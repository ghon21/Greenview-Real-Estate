import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import AppraisalForm from "@/components/AppraisalForm";
import { getListings } from "@/lib/db";
import { reviews, team } from "@/lib/data";

export const revalidate = 300;

export default async function Home() {
  const listings = await getListings();
  return (
    <main>
      <Hero />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        {[["Sell your home", "A free appraisal, a clear marketing plan and one agent who keeps you updated.", "#appraisal"],
          ["Buy a property", "Browse listings and join the off-market register to hear about homes first.", "#buy"],
          ["Rent out your property", "Property management with rent collection, inspections and maintenance handled.", "#rent"]].map(([t, d, h], i) => (
          <Reveal key={t} delay={i * 0.08}><a href={h} className="block h-full rounded-3xl border border-line bg-white p-8 transition hover:border-sage-d hover:shadow-lg"><h3 className="text-3xl">{t}</h3><p className="mt-3 text-muted">{d}</p></a></Reveal>
        ))}
      </section>

      <Process />

      <section id="appraisal" className="mx-auto grid max-w-6xl items-start gap-16 px-6 py-24 lg:grid-cols-2">
        <div><h2 className="text-4xl sm:text-5xl">Find out what your home is worth</h2>
          <p className="mt-5 max-w-md text-lg text-muted">Tell us where it is and when you’re thinking of selling. We’ll call you with a no-obligation appraisal.</p>
          <p className="mt-6 text-muted">Prefer to talk? Call <a className="underline" href="tel:+61386503000">+61 3 8650 3000</a>.</p></div>
        <AppraisalForm />
      </section>

      <section id="buy" className="border-t border-line py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl sm:text-5xl">Properties around Clyde North</h2>
          <p className="mt-4 max-w-lg text-muted">Some of our best homes sell off market. Tell us what you’re after and we’ll contact you before they reach the portals.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {listings.map((l, i) => (
              <Reveal key={l.id} delay={i * 0.08}>
                <article className="group overflow-hidden rounded-3xl border border-line bg-white">
                  <div className="overflow-hidden"><div className="relative h-56 bg-gradient-to-br from-[#e8eee8] to-[#b6c6b8] transition duration-700 group-hover:scale-[1.04]">
                    {l.status === "sold" && <span className="absolute left-0 top-6 rounded-r-full bg-sage-d py-1 pl-4 pr-7 font-serif text-xl tracking-[.2em] text-white">SOLD</span>}
                  </div></div>
                  <div className="p-6"><h3 className="text-2xl">{l.suburb}</h3><p className="text-sm text-muted">{l.address}{l.sample ? " (placeholder)" : ""}</p>
                    <p className="mt-3">{l.price}</p><p className="mt-1 text-sm text-muted">{l.beds} bed · {l.baths} bath · {l.cars} car</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="rent" className="bg-forest py-24 text-bone">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
          <div><h2 className="text-4xl sm:text-5xl">Property management that stays out of your way</h2>
            <p className="mt-5 max-w-md text-lg opacity-85">Tenant selection, rent collection, routine inspections and maintenance, with clear reporting to you.</p></div>
          <div className="lg:text-right"><a href="#appraisal" className="inline-flex rounded-full bg-bone px-7 py-3.5 text-forest transition hover:-translate-y-0.5">Request a rental appraisal</a></div>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl sm:text-5xl">What our clients say</h2>
          <p className="mt-4 max-w-lg text-muted">Excerpts from our Google reviews. Clients most often mention market knowledge, quick replies and a calm process.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}><figure className="m-0 h-full rounded-3xl border border-line bg-white p-8"><div className="text-amber-500">★★★★★</div><blockquote className="mt-3 font-serif text-2xl leading-snug">{r.text}</blockquote><figcaption className="mt-5 text-sm text-muted">{r.name}</figcaption></figure></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-t border-line py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl sm:text-5xl">Meet the team</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}><div className="rounded-3xl border border-line bg-white p-5"><div className="h-64 rounded-2xl bg-gradient-to-b from-[#dfe7df] to-[#b6c6b8]" /><h3 className="mt-5 text-2xl">{m.name}</h3><p className="text-muted">{m.role}, {m.area}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
