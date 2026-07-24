"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Camera, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

const highlights = [
  {
    icon: Camera,
    title: "Cinematic Craft",
    text: "Story-driven photography and films with rich, timeless colour.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Touch",
    text: "We blend into your family so every candid moment stays natural.",
  },
  {
    icon: Award,
    title: "Trusted Locally",
    text: `Rated ${site.rating.toFixed(1)} stars by families across West Bengal.`,
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
        {/* Layered photos */}
        <div className="relative mx-auto h-[480px] w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-8 h-80 w-64 overflow-hidden rounded-2xl border-4 border-paper-card shadow-2xl shadow-black/50"
          >
            <Image
              src="https://i.ytimg.com/vi/00L8TqFwWHc/maxresdefault.jpg"
              alt="Monisha, radiant on her wedding day"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 right-0 h-80 w-64 overflow-hidden rounded-2xl border-4 border-paper-card shadow-2xl shadow-black/50"
          >
            <Image
              src="https://i.ytimg.com/vi/NwLpK35F_pw/maxresdefault.jpg"
              alt="Debayan & Mouli on their wedding day"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-float flex-col items-center justify-center rounded-full border border-gold/40 bg-paper/90 text-center shadow-lg shadow-black/40 backdrop-blur"
          >
            <span className="font-display text-3xl text-gold">8+</span>
            <span className="px-3 text-[10px] uppercase tracking-widest text-ink/60">
              Years of Stories
            </span>
          </motion.div>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              About Us
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Every family has a story.{" "}
              <span className="italic text-gold-gradient">
                We frame it in gold.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 leading-relaxed text-muted">
              Based in {site.address}, Golden Moments is a full-service
              photography and film studio for life&apos;s most precious
              celebrations. From the first haldi smear to the final vidaai
              tear, from a newborn&apos;s first yawn to a birthday&apos;s
              hundredth smile — we are there, quietly turning seconds into
              heirlooms.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group flex items-start gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <h.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {h.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
