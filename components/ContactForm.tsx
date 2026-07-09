"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-signal-gold/30 bg-charcoal-soft p-8 text-center">
        <p className="font-display text-xl text-signal-gold">Message sent.</p>
        <p className="mt-2 text-sm text-primer/70">
          Thanks for reaching out — we reply within one business day. For anything urgent, message
          us on WhatsApp using the button in the corner.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-primer/25 px-5 py-2 text-sm font-semibold text-primer/85 hover:border-signal-gold hover:text-signal-gold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primer/60">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-sm text-primer placeholder:text-primer/30 focus:border-signal-gold"
            placeholder="Adaeze Okafor"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primer/60">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-sm text-primer placeholder:text-primer/30 focus:border-signal-gold"
            placeholder="080X XXX XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primer/60">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-sm text-primer placeholder:text-primer/30 focus:border-signal-gold"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primer/60">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          defaultValue="Consultation"
          className="w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-sm text-primer focus:border-signal-gold"
        >
          <option>Consultation</option>
          <option>Product order / quote</option>
          <option>Application support</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-primer/60">
          Tell us about the job
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-sm text-primer placeholder:text-primer/30 focus:border-signal-gold"
          placeholder="Surface, size of the area, and rough timeline"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-signal-red">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-signal-red px-6 py-3.5 text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
