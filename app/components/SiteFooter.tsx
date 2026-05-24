"use client";

import Link from "next/link";
import { useI18n } from "./i18n";
import { getWhatsappOrderLink, socialLinks } from "./site-data";

export function SiteFooter() {
  const { dictionary } = useI18n();
  const brandLinks = [
    { href: "/shop", label: "Shop All" },
    { href: "/shop/lips", label: "Lips" },
    { href: "/shop/eyes", label: "Eyes" },
    { href: "/shop/face", label: "Face" },
    { href: "/shop/skin-body", label: "Skin & Body" },
  ];
  const careLinks = [
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: getWhatsappOrderLink(), label: "Order via WhatsApp", external: true },
  ];
  const legalLinks = [
    { href: "/privacy-policy", label: dictionary.nav.privacyPolicy },
    { href: "/terms-of-use", label: dictionary.nav.termsOfUse },
  ];

  return (
    <footer className="bg-white border-t border-stone-200/60 text-stone-600 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top section: brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 mb-14">
          <div>
            <h3 className="text-stone-900 text-5xl sm:text-6xl font-light mb-6 tracking-[0.2em] font-['var(--font-playfair)']">
              {dictionary.common.brand}
            </h3>
            <p className="text-base text-stone-500 font-light tracking-wide leading-relaxed max-w-xl mb-8">
              {dictionary.common.footerTagline}
            </p>
            <div className="flex flex-wrap gap-5 text-sm font-light tracking-[0.16em]">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{dictionary.common.instagram}</a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{dictionary.common.tiktok}</a>
              <a href={getWhatsappOrderLink()} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{dictionary.common.whatsapp}</a>
            </div>
          </div>
          <div className="border border-stone-200 bg-stone-50/50 p-6 sm:p-8">
            <h3 className="text-stone-900 text-2xl font-light mb-4 tracking-[0.12em] font-['var(--font-playfair)']">
              Join the Mouna list
            </h3>
            <p className="text-sm font-light leading-relaxed text-stone-500 mb-6">
              Receive launch notes, gloss shade updates, and bundle availability. This form is visual only for now.
            </p>
            <form className="space-y-3" aria-label="Newsletter signup coming soon">
              <input
                type="text"
                name="first-name"
                placeholder="First name"
                className="w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-400"
              />
              <button
                type="button"
                className="w-full border border-stone-900 bg-stone-900 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white hover:bg-stone-800 transition-colors duration-300"
              >
                Subscribe
              </button>
              <p className="text-xs font-light leading-relaxed text-stone-400">
                Visual signup only for now. Launch updates are shared through social channels.
              </p>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-stone-200/60 pt-10 mb-10">
          <div>
            <h4 className="text-stone-900 text-sm uppercase tracking-[0.22em] mb-5">Brand</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {brandLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900 text-sm uppercase tracking-[0.22em] mb-5">Customer Care</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {careLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900 text-sm uppercase tracking-[0.22em] mb-5">Legal</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {legalLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm font-light tracking-wide text-stone-400">
          <p>&copy; 2026 Mouna Cosmetics. {dictionary.common.rights}</p>
        </div>
      </div>
    </footer>
  );
}
