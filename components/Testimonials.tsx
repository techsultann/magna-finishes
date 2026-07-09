import DripDivider from "./DripDivider";

const REVIEWS = [
  {
    quote:
      "We gave them a faded sample chip from a wall painted a decade ago and they matched it within one visit. The estate exterior still looks sharp two years on.",
    name: "Tunde A.",
    role: "Facilities Manager, Alakuko Estate",
    rating: 5,
  },
  {
    quote:
      "The consultation alone saved us money — they told us we'd over-ordered by four drums before we even opened the first one.",
    name: "Ifeoma N.",
    role: "Site Contractor, Ikeja",
    rating: 5,
  },
  {
    quote:
      "Delivery was on time even when we changed the order twice. That reliability is rare with paint suppliers in Lagos.",
    name: "Bashir O.",
    role: "Procurement Lead, Lagos Mainland Contractors",
    rating: 4,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-signal-gold" : "fill-primer/15"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.8l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-primer py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-navy">What clients say</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Reviews from people who watched the paint dry.
          </h2>
          <div className="flex items-center gap-2">
            <Stars rating={5} />
            <span className="text-sm font-semibold text-charcoal/70">4.8/5 average, 210+ reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col justify-between rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm"
            >
              <div>
                <Stars rating={review.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-charcoal/75">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-charcoal/10 pt-4">
                <p className="font-display text-sm tracking-tight">{review.name}</p>
                <p className="text-xs text-charcoal/50">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <DripDivider color="navy" />
      </div>
    </section>
  );
}
