const STATS = [
  { value: "16+", label: "Years mixing paint" },
  { value: "1,200+", label: "Sites finished" },
  { value: "40,000L+", label: "Paint produced yearly" },
  { value: "98%", label: "Clients who reorder" },
];

const TRUSTED_BY = [
  "Alakuko Estate Developers",
  "Fagbeyiro Construction",
  "Ikeja Facilities Group",
  "Lagos Mainland Contractors",
  "Coastal Realty NG",
];

export default function SocialProof() {
  return (
    <section className="border-y border-charcoal/10 bg-primer py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl text-signal-red sm:text-4xl">{stat.value}</dd>
              <p className="mt-1 text-xs text-charcoal/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </dl>

        <div className="mt-14 border-t border-charcoal/10 pt-8">
          <p className="eyebrow text-center text-charcoal/45 sm:text-left">
            Trusted by developers and contractors across Lagos
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-3 sm:justify-start">
            {TRUSTED_BY.map((name) => (
              <li key={name} className="font-display text-sm tracking-tight text-charcoal/45 sm:text-base">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}