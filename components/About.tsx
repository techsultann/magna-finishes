const MILESTONES = [
  { year: "2010", detail: "Founded in Lagos with a single mixing line and three shades." },
  { year: "2014", detail: "Opened application services after clients asked us to finish what we sold them." },
  { year: "2019", detail: "Added industrial and anti-corrosive coatings for site contractors." },
  { year: "2026", detail: "Serving estates, contractors and homeowners across Lagos." },
];

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="eyebrow text-signal-red">Since 2010</p>
            <h2 className="mt-3 font-display text-2xl leading-tight tracking-tight text-charcoal sm:text-3xl">
              Sixteen years of the same three colours in every batch.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
              Magna Finishes Global Limited started as a two-room mixing operation in Lagos and
              grew because the paint that left our floor matched the paint on the wall a year
              later. That&apos;s still the whole job.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {MILESTONES.map((item) => (
              <li key={item.year} className="rounded-xl border border-charcoal/10 bg-primer p-5">
                <p className="font-display text-lg text-signal-red">{item.year}</p>
                <p className="mt-1.5 text-sm text-charcoal/70">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}