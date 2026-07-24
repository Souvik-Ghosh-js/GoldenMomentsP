"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
} from "@/data/site";

type Filter = "All" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Moments we turned"
          accent="into gold"
          subtitle="A glimpse of the weddings, ceremonies and little milestones we've had the honour of capturing."
        />

        {/* Category filter — categories will be managed from the admin panel later */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 ${
                filter === cat
                  ? "text-white"
                  : "border border-gold/25 text-ink/60 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="gallery-filter-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((img) => (
              <motion.figure
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-xl border-4 border-paper-card shadow-md shadow-black/40 ${
                  img.tall ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="translate-y-4 text-[10px] uppercase tracking-[0.3em] text-gold-light transition-transform duration-500 group-hover:translate-y-0">
                    {img.category}
                  </span>
                  <span className="translate-y-4 font-display text-lg italic text-white transition-transform delay-75 duration-500 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
