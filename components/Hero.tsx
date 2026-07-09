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
    <section id="top" className="relative overflow-hidden bg-charcoal pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow text-signal-gold">
            Mixed &amp; manufactured in Lagos since 2010
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl"
          >
            PAINT THAT
            <span className="block text-signal-red">HOLDS ITS COLOUR.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-base text-primer/75 sm:text-lg">
            Magna Finishes Global Limited formulates architectural and industrial coatings for
            homes, sites and factories across Nigeria &mdash; backed by {yearsInBusiness} years of
            batch-tested quality and a team that shows up after the job is done.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">            
            <a
              href="#contact"
              className="rounded-full bg-signal-red px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
            >
              Book a free consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-primer/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-primer/85 transition-colors hover:border-signal-gold hover:text-signal-gold"
            >
              See our products
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-charcoal-line pt-6 sm:max-w-md"
          >
            <div>
              <dt className="eyebrow text-primer/50">Since</dt>
              <dd className="mt-1 font-display text-2xl text-signal-gold sm:text-3xl">2010</dd>
            </div>
            <div>
              <dt className="eyebrow text-primer/50">Years mixing</dt>
              <dd className="mt-1 font-display text-2xl text-signal-gold sm:text-3xl">{yearsInBusiness}+</dd>
            </div>
            <div>
              <dt className="eyebrow text-primer/50">Based in</dt>
              <dd className="mt-1 font-display text-xl text-signal-gold sm:text-2xl">Lagos</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-navy/30 blur-3xl" aria-hidden="true" />
          <motion.div
            className="rounded-[2rem] border border-charcoal-line bg-charcoal-soft p-8 shadow-2xl"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, 8, 0] }
            }
            transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/logo.jpg"
              alt="Magna Finishes Global Limited emblem"
              width={420}
              height={420}
              className="mx-auto h-auto w-full max-w-[280px] rounded-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-14 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
      >
        <DripDivider color="navy" />
      </motion.div>
    </section>
  );
}