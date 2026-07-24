"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { site } from "@/data/site";

// Arnab & Raima under the fairy lights — one of the studio's own frames
const HERO_IMAGE = "https://i.ytimg.com/vi/vJgTTKLBXM0/maxresdefault.jpg";

const words = ["Turning", "fleeting", "seconds", "into"];

export default function Hero() {
  return (
    <section
      id="home"
      className="vignette relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Ken-burns background */}
      <div
        aria-hidden
        className="absolute inset-0 animate-kenburns bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center sm:pt-32">
        {/* Rating badge — matches the Google listing */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-paper/70 px-5 py-2 shadow-sm shadow-black/30 backdrop-blur-md"
        >
          <span className="flex gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
          </span>
          <span className="text-xs tracking-wider text-ink/80">
            {site.rating.toFixed(1)} · {site.reviewCount} Google Reviews
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mb-6 text-xs font-medium uppercase text-gold sm:text-sm"
        >
          Photography &amp; Films · {site.address}
        </motion.p>

        {/* Staggered word reveal */}
        <h1 className="font-display text-5xl leading-[1.08] sm:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50, rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.7 + i * 0.14,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-4 inline-block text-ink"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block italic text-gold-gradient"
          >
            Golden Moments
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
        >
          Weddings, ceremonies and every milestone in between — captured with a
          cinematic eye, crafted into memories that glow forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#gallery"
            className="group relative overflow-hidden rounded-full bg-gold px-9 py-4 text-sm font-medium uppercase tracking-widest text-white transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(176,138,46,0.45)]"
          >
            <span className="relative z-10">View Our Work</span>
            <span className="absolute inset-0 -translate-x-full bg-gold-deep transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/25 px-9 py-4 text-sm uppercase tracking-widest text-ink transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Book a Session
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-gold/80 hover:text-gold"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
