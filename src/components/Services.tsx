"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Cake,
  Camera,
  Film,
  Gem,
  Heart,
  RadioTower,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services, type Service } from "@/data/site";

const icons: Record<Service["icon"], LucideIcon> = {
  heart: Heart,
  gem: Gem,
  camera: Camera,
  baby: Baby,
  cake: Cake,
  film: Film,
  radio: RadioTower,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services crafted for"
          accent="your celebrations"
          subtitle="From intimate ceremonies to grand weddings — one team, every memory covered."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-paper-card p-8 shadow-md shadow-amber-900/5 transition-all duration-500 hover:border-gold/40 hover:shadow-xl hover:shadow-amber-900/10"
              >
                {/* hover sheen */}
                <span className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute right-6 top-5 font-display text-5xl text-ink/5 transition-colors duration-500 group-hover:text-gold/20">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold group-hover:text-white group-hover:shadow-[0_0_25px_rgba(176,138,46,0.3)]">
                  <Icon size={24} />
                </span>

                <h3 className="font-display text-2xl leading-snug text-ink transition-colors duration-300 group-hover:text-gold-deep">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <span className="gold-rule mt-6 block w-0 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
