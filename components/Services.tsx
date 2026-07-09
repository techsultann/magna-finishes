import DripDivider from "./DripDivider";

const SERVICES = [
  {
    tag: "Before you buy",
    title: "Colour consultation",
    dot: "bg-signal-red",
    description:
      "A specialist visits your site or shows up on a call to read your surfaces, light and budget, then leaves you with a colour scheme and a coats-and-quantity plan — no guesswork, no over-ordering.",
    points: ["On-site or virtual walkthrough", "Surface & substrate assessment", "Written quantity & cost estimate"],
  },
  {
    tag: "What we make",
    title: "Paints & coatings",
    dot: "bg-signal-gold",
    description:
      "Emulsions, gloss, primers, texture and industrial coatings, batch-mixed at our Lagos facility and matched to any shade you bring us, from a swatch to a sample chip.",
    points: ["Interior & exterior emulsions", "Industrial & anti-corrosive coatings", "Custom colour matching"],
  },
  {
    tag: "After delivery",
    title: "Application support",
    dot: "bg-navy",
    description:
      "Our field team trains your painters or handles application directly, with a site visit before handover so the finish still looks right a year in, not just on day one.",
    points: ["Painter training on-site", "Direct application teams", "Post-job quality check"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primer py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-signal-red">What we do</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
          From the first colour swatch to the last coat.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="swatch-card can-label rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm"
            >
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${service.dot}`}
                aria-hidden="true"
              />
              <p className="eyebrow mt-3 text-charcoal/50">{service.tag}</p>
              <h3 className="mt-2 font-display text-xl tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{service.description}</p>
              <ul className="mt-5 space-y-2 border-t border-charcoal/10 pt-4">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-charcoal/75">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${service.dot}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rotate-180">
        <DripDivider color="red" />
      </div>
    </section>
  );
}
