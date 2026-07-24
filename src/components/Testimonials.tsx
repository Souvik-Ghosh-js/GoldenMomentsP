"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site, testimonials } from "@/data/site";

export default function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (dir: number) =>
      setIndex(([i]) => [
        (i + dir + testimonials.length) % testimonials.length,
        dir,
      ]),
    []
  );

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paginate, index]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Families who trusted us with"
          accent="their moments"
          subtitle={`${site.rating.toFixed(1)} ★ from ${site.reviewCount} Google reviews`}
        />

        <div className="relative">
          <Quote
            size={80}
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold/10"
          />

          <div className="relative min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.blockquote
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-ink/85 sm:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <div className="mb-3 flex justify-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <cite className="not-italic">
                    <span className="block text-lg tracking-wide text-gold">
                      {t.name}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-muted">
                      {t.event}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              aria-label="Previous review"
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold transition-all hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-gold/25 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next review"
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold transition-all hover:bg-gold hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
