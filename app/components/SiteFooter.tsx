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
    <footer className="bg-stone-950 text-stone-400 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 mb-14">
          <div>
            <h3 className="text-white text-5xl sm:text-6xl font-light mb-6 tracking-[0.2em] font-['var(--font-playfair)']">
              {dictionary.common.brand}
            </h3>
            <p className="text-lg text-stone-300 font-light tracking-wide leading-relaxed max-w-xl mb-8">
              {dictionary.common.footerTagline}
            </p>
            <div className="flex flex-wrap gap-5 text-sm font-light tracking-[0.16em]">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">{dictionary.common.instagram}</a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">{dictionary.common.tiktok}</a>
              <a href={getWhatsappOrderLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">{dictionary.common.whatsapp}</a>
            </div>
          </div>
          <div className="border border-stone-800 bg-stone-900/30 p-6 sm:p-8">
            <h3 className="text-white text-2xl font-light mb-4 tracking-[0.12em] font-['var(--font-playfair)']">
              Join the Mouna list
            </h3>
            <p className="text-sm font-light leading-relaxed text-stone-400 mb-6">
              Receive launch notes, gloss shade updates, and bundle availability. This form is visual only for now.
            </p>
            <form className="space-y-3" aria-label="Newsletter signup coming soon">
              <input
                type="text"
                name="first-name"
                placeholder="First name"
                className="w-full border border-stone-700 bg-stone-900/40 px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none focus:border-stone-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-stone-700 bg-stone-900/40 px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none focus:border-stone-300"
              />
              <button
                type="button"
                className="w-full border border-stone-200 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white hover:bg-white hover:text-stone-950 transition-colors duration-300"
              >
                Subscribe
              </button>
              <p className="text-xs font-light leading-relaxed text-stone-500">
                Visual signup only for now. Launch updates are shared through social channels.
              </p>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-stone-800 pt-10 mb-10">
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.22em] mb-5">Brand</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {brandLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.22em] mb-5">Customer Care</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {careLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.22em] mb-5">Legal</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {legalLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center text-sm font-light tracking-wide">
          <p>&copy; 2026 Mouna Cosmetics. {dictionary.common.rights}</p>
        </div>
      </div>
    </footer>
  );
}
