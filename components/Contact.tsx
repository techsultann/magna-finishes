import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-signal-red">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl">
            Tell us what you&apos;re painting.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-charcoal/70 sm:text-base">
            Whether it&apos;s one room or a full estate, send us the details and we&apos;ll come
            back with a plan, a quote, or a straight answer.
          </p>

          <dl className="mt-10 space-y-6 border-t border-charcoal/10 pt-8">
            <div>
              <dt className="eyebrow text-charcoal/45">Address</dt>
              <dd className="mt-1.5 text-sm text-charcoal/80">
                55, Fagbeyiro Abayomi Street,
                <br />
                Alakuko, Lagos, Nigeria
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-charcoal/45">Email</dt>
              <dd className="mt-1.5 text-sm text-charcoal/80">
                <a href="mailto:magnafinishesglobal@gmail.com" className="hover:text-signal-red">
                  magnafinishesglobal@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-charcoal/45">WhatsApp</dt>
              <dd className="mt-1.5 text-sm text-charcoal/80">
                Tap the WhatsApp button in the corner for the fastest reply.
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-charcoal/10 bg-primer p-6 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}