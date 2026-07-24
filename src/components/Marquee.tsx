"use client";

import { Sparkles } from "lucide-react";
import { services } from "@/data/site";

export default function Marquee() {
  const items = services.map((s) => s.title);
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-paper-soft py-5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-xl italic text-ink/50"
          >
            {item}
            <Sparkles size={14} className="text-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
