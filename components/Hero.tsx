"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import DripDivider from "./DripDivider";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const yearsInBusiness = new Date().getFullYear() - 2010;
  const prefersReducedMotion = useReducedMotion();

  // Parent controls stagger timing; each child just fades/slides up.
  const container: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/magna_hero_bg.jpg"
          alt="Freshly painted modern interior finished with Magna Finishes paint"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark scrim for text legibility — stronger on the left/bottom where copy sits */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(21,22,27,0.92) 0%, rgba(21,22,27,0.72) 32%, rgba(21,22,27,0.35) 60%, rgba(21,22,27,0.15) 100%), linear-gradient(to top, rgba(21,22,27,0.85) 0%, rgba(21,22,27,0) 35%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28 md:min-h-[640px] md:flex md:items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.p variants={item} className="eyebrow text-signal-gold">
            Mixed &amp; manufactured in Lagos since 2010
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-[2.6rem] leading-[1.05] tracking-tight text-primer sm:text-6xl"
          >
            PAINT THAT
            <span className="block text-signal-red">HOLDS ITS COLOUR.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-base text-primer/85 sm:text-lg">
             Magna Finishes Global Limited formulates architectural and industrial coatings for
            homes, sites and factories across Nigeria we also sell paint chemicals in retail and wholesale backed by {yearsInBusiness} years of
            batch-tested quality and a team that shows up after the job is done.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-signal-red px-7 py-3.5 text-sm font-semibold tracking-wide text-primer transition-transform hover:-translate-y-0.5"
            >
              Book a free consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-primer/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-primer transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              See our products
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-primer/20 pt-6"
          >
            <div>
              <dt className="eyebrow text-primer/60">Since</dt>
              <dd className="mt-1 font-display text-2xl text-signal-gold sm:text-3xl">2010</dd>
            </div>
            <div>
              <dt className="eyebrow text-primer/60">Years mixing</dt>
              <dd className="mt-1 font-display text-2xl text-signal-gold sm:text-3xl">{yearsInBusiness}+</dd>
            </div>
            <div>
              <dt className="eyebrow text-primer/60">Based in</dt>
              <dd className="mt-1 font-display text-xl text-signal-gold sm:text-2xl">Lagos</dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>

      <motion.div
        className="relative origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
      >
        <DripDivider color="navy" />
      </motion.div>
    </section>
  );
}