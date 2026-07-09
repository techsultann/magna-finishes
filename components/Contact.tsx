import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-signal-gold">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Tell us what you&apos;re painting.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-primer/70 sm:text-base">
            Whether it&apos;s one room or a full estate, send us the details and we&apos;ll come
            back with a plan, a quote, or a straight answer.
          </p>

          <dl className="mt-10 space-y-6 border-t border-charcoal-line pt-8">
            <div>
              <dt className="eyebrow text-primer/45">Address</dt>
              <dd className="mt-1.5 text-sm text-primer/85">
                55, Fagbeyiro Abayomi Street,
                <br />
                Alakuko, Lagos, Nigeria
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-primer/45">Email</dt>
              <dd className="mt-1.5 text-sm text-primer/85">
                <a href="mailto:magnafinishesglobal@gmail.com" className="hover:text-signal-gold">
                  magnafinishesglobal@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-primer/45">WhatsApp</dt>
              <dd className="mt-1.5 text-sm text-primer/85">
                Tap the WhatsApp button in the corner for the fastest reply.
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-charcoal-line bg-charcoal-soft p-6 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
