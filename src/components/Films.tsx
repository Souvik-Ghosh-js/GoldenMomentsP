"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Clapperboard, Play, Youtube } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { filmCategories, films, site, type FilmCategory } from "@/data/site";

type Filter = "All" | FilmCategory;

const PAGE_SIZE = 6;

function FilmCard({
  youtubeId,
  title,
  duration,
  category,
}: (typeof films)[number]) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl border-4 border-paper-card bg-black shadow-md shadow-black/40 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-black/60">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="absolute inset-0 h-full w-full text-left"
          >
            <Image
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-500" />

            {/* play button */}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gold/40 blur-md transition-all duration-500 group-hover:scale-150" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-gold shadow-lg backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
                <Play size={22} fill="currentColor" className="ml-1" />
              </span>
            </span>

            <span className="absolute left-3 top-3 rounded-full bg-paper/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-light backdrop-blur">
              {category}
            </span>
            <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs tracking-wider text-white">
              {duration}
            </span>
          </button>
        )}
      </div>
      <h3 className="mt-4 line-clamp-2 font-display text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-gold-light">
        {title}
      </h3>
    </motion.article>
  );
}

export default function Films() {
  const [filter, setFilter] = useState<Filter>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    filter === "All" ? films : films.filter((f) => f.category === filter);
  const visible = filtered.slice(0, visibleCount);

  const selectFilter = (cat: Filter) => {
    setFilter(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section
      id="films"
      className="relative border-y border-gold/15 bg-paper-soft py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Our Films"
          title="Stories that move,"
          accent="in motion"
          subtitle="Real weddings, ceremonies and celebrations from our YouTube channel — press play and step into the moment."
        />

        {/* Category filter — same data model the admin panel will manage */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filmCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectFilter(cat)}
              className={`relative rounded-full px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 ${
                filter === cat
                  ? "text-white"
                  : "border border-gold/25 text-ink/60 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="films-filter-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat === "All" && <Clapperboard size={13} />}
                {cat}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((film) => (
              <FilmCard key={film.youtubeId} {...film} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {visibleCount < filtered.length && (
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-full border border-gold/40 px-8 py-3.5 text-xs uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              Show More Films ({filtered.length - visibleCount})
            </button>
          )}
          <a
            href={site.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-[#FF0000] px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,0,0,0.3)]"
          >
            <Youtube size={17} /> Visit Our Channel
          </a>
        </div>
      </div>
    </section>
  );
}
