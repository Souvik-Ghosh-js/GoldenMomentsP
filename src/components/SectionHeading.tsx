"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  /** the word(s) rendered in italic gold */
  accent: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
          {title}{" "}
          <span className="italic text-gold-gradient">{accent}</span>
        </h2>
      </Reveal>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        className="gold-rule mx-auto mt-6 w-40"
      />
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-5 text-base leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
