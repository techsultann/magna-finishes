"use client";

import { useState } from "react";

export default function BeforeAfter() {
  const [reveal, setReveal] = useState(52);

  return (
    <section id="results" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="eyebrow text-signal-red">Proof, not promises</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl">
          Drag the line. Same wall, one visit apart.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-charcoal/70 sm:text-base">
          A faded exterior in Alakuko before and after two coats of Magna Finishes weather-guard
          emulsion. Every job we take on gets the same before/after record.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-charcoal/10">
          <div className="relative aspect-[4/3] w-full select-none sm:aspect-[16/9]">
            {/* AFTER layer (base) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #2B3990 0%, #3948a8 45%, #F5A623 100%)",
              }}
            >
              <span className="absolute bottom-4 right-4 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-semibold tracking-wide text-signal-gold">
                AFTER
              </span>
            </div>

            {/* BEFORE layer (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(135deg, #4b4b46 0%, #6b6a5f 45%, #8a8776 100%)",
                  filter: "saturate(0.55) brightness(0.85)",
                }}
              >
                <div
                  className="h-full w-full mix-blend-overlay opacity-40"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(100deg, rgba(0,0,0,0.25) 0 2px, transparent 2px 14px)",
                  }}
                />
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-semibold tracking-wide text-primer">
                BEFORE
              </span>
            </div>

            {/* Divider line */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-primer/90"
              style={{ left: `${reveal}%` }}
            />
          </div>

          <div className="bg-primer px-5 py-4 sm:px-8">
            <label htmlFor="reveal-range" className="sr-only">
              Drag to compare before and after
            </label>
            <input
              id="reveal-range"
              type="range"
              min={0}
              max={100}
              value={reveal}
              onChange={(e) => setReveal(Number(e.target.value))}
              className="reveal-slider"
              aria-valuetext={`${reveal}% after view showing`}
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-charcoal/40">
          Sample comparison shown for layout — swap in your own site photography before launch.
        </p>
      </div>
    </section>
  );
}