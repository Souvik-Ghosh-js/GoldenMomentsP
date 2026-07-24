"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { stats } from "@/data/site";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => v.toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return (
    <span ref={ref} className="font-display text-5xl text-gold-gradient sm:text-6xl">
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-gold/15 bg-paper-soft py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-center"
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              decimals={"decimals" in stat ? stat.decimals : 0}
            />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
