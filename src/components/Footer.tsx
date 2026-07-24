"use client";

import { Camera, Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { navLinks, services, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-paper-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <Camera size={18} />
            </span>
            <span className="font-display text-2xl">
              <span className="text-gold-gradient">Golden</span>{" "}
              <span className="text-ink">Moments</span>
            </span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Premium photography &amp; films for weddings and every celebration
            that matters — based in {site.address}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Youtube, label: "YouTube", href: site.youtubeUrl },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-white"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {site.address}
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Phone size={16} className="shrink-0 text-gold" />
                {site.phone}
              </a>
            </li>
            <li className="text-xs">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6">
        <p className="text-center text-xs tracking-wider text-muted/70">
          © {new Date().getFullYear()} {site.name} · All memories reserved ✦
        </p>
      </div>
    </footer>
  );
}
