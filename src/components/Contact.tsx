"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CalendarHeart,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Star,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import { services, site } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-gold/20 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-gold/60 focus:shadow-[0_0_0_3px_rgba(176,138,46,0.15)]";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Frontend-only for now — wire to the backend/admin panel later.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's plan your"
          accent="golden day"
          subtitle="Tell us about your celebration and we'll call you back within a few hours."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="space-y-5 rounded-2xl border border-gold/15 bg-paper-card p-7 shadow-md shadow-black/25">
              <a href={site.phoneHref} className="group flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <Phone size={19} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Call Us
                  </p>
                  <p className="text-lg text-ink group-hover:text-gold">
                    {site.phone}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                  <MapPin size={19} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Studio
                  </p>
                  <p className="text-lg text-ink">{site.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                  <Clock size={19} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Hours
                  </p>
                  <p className="text-lg text-ink">{site.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                  <Star size={19} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Rating
                  </p>
                  <p className="text-lg text-ink">
                    {site.rating.toFixed(1)} ★ · {site.reviewCount} Google Reviews
                  </p>
                </div>
              </div>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold/40 py-3.5 text-sm uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gold/10 grayscale transition-all duration-700 hover:grayscale-0">
              <iframe
                title="Golden Moments studio location"
                src={site.mapEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-gold/15 bg-paper-card p-7 shadow-md shadow-black/25 sm:p-10 lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                  className="mb-6 text-gold"
                >
                  <CheckCircle2 size={72} strokeWidth={1.2} />
                </motion.span>
                <h3 className="font-display text-3xl text-ink">
                  Thank you! <span className="italic text-gold-gradient">We&apos;ve got it.</span>
                </h3>
                <p className="mt-3 max-w-md text-muted">
                  Our team will call you back shortly. For anything urgent,
                  reach us at {site.phone}.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                      Your Name
                    </label>
                    <input required placeholder="Full name" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                      Service
                    </label>
                    <select className={inputClass} defaultValue={services[2].title}>
                      {services.map((s) => (
                        <option key={s.id} className="bg-paper">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                      Event Date
                    </label>
                    <input type="date" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                    Tell us about your event
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Venue, number of guests, what you have in mind..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gold py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(176,138,46,0.35)]"
                >
                  <CalendarHeart size={18} />
                  Request a Callback
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <p className="text-center text-xs text-muted/70">
                  We usually respond within a few hours, every day of the week.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* CTA ribbon */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-r from-paper-card via-paper-soft to-paper-card px-8 py-12 text-center shadow-md shadow-black/25">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[90px]"
            />
            <h3 className="relative font-display text-3xl text-ink sm:text-4xl">
              Your story deserves to be told{" "}
              <span className="italic text-gold-gradient">beautifully.</span>
            </h3>
            <a
              href={site.phoneHref}
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(176,138,46,0.45)]"
            >
              <Phone size={16} /> Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
