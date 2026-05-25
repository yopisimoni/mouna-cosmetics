"use client";

import Link from "next/link";
import { useI18n } from "./i18n";
import { getWhatsappOrderLink, socialLinks } from "./site-data";

export function SiteFooter() {
  const { dictionary } = useI18n();
  const brandLinks = [
    { href: "/shop", label: dictionary.common.shopAll },
    { href: "/shop/lips", label: dictionary.common.lips },
    { href: "/shop/eyes", label: dictionary.common.eyes },
    { href: "/shop/face", label: dictionary.common.face },
    { href: "/shop/skin-body", label: dictionary.common.skinBody },
  ];
  const careLinks = [
    { href: "/contact", label: dictionary.common.contactUs },
    { href: "/faq", label: "FAQ" },
    { href: "/shipping-returns", label: dictionary.common.shippingReturns },
    { href: getWhatsappOrderLink(), label: dictionary.common.orderWhatsapp, external: true },
  ];
  const legalLinks = [
    { href: "/privacy-policy", label: dictionary.nav.privacyPolicy },
    { href: "/terms-of-use", label: dictionary.nav.termsOfUse },
  ];

  return (
    <footer className="bg-white border-t border-stone-200/60 text-stone-600 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Trust / Delivery Info Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-14 pb-14 border-b border-stone-200/60">
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xs font-medium text-stone-900 tracking-wide mb-1">{dictionary.common.paymentOnDelivery}</h4>
            <p className="text-[0.65rem] text-stone-500 font-light">{dictionary.common.payOnDelivery}</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h4 className="text-xs font-medium text-stone-900 tracking-wide mb-1">{dictionary.common.freeShipping}</h4>
            <p className="text-[0.65rem] text-stone-500 font-light">{dictionary.common.freeShippingNote}</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="text-xs font-medium text-stone-900 tracking-wide mb-1">{dictionary.common.easyReturns}</h4>
            <p className="text-[0.65rem] text-stone-500 font-light">{dictionary.common.easyReturnsNote}</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="text-xs font-medium text-stone-900 tracking-wide mb-1">{dictionary.common.whatsappOrdering}</h4>
            <p className="text-[0.65rem] text-stone-500 font-light">{dictionary.common.whatsappOrderingNote}</p>
          </div>
        </div>

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
              {dictionary.common.joinMounaList}
            </h3>
            <p className="text-sm font-light leading-relaxed text-stone-500 mb-6">
              {dictionary.common.newsletterDesc}
            </p>
            <form className="space-y-3" aria-label={dictionary.common.joinMounaList}>
              <input
                type="text"
                name="first-name"
                placeholder={dictionary.common.firstName}
                className="w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-400"
              />
              <input
                type="email"
                name="email"
                placeholder={dictionary.common.email}
                className="w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-400"
              />
              <button
                type="button"
                className="w-full border border-stone-900 bg-stone-900 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white hover:bg-stone-800 transition-colors duration-300"
              >
                {dictionary.common.subscribe}
              </button>
              <p className="text-xs font-light leading-relaxed text-stone-400">
                {dictionary.common.newsletterNote}
              </p>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-stone-200/60 pt-10 mb-10">
          <div>
            <h4 className="text-stone-900 text-sm uppercase tracking-[0.22em] mb-5">{dictionary.common.brandColumn}</h4>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              {brandLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-stone-500 hover:text-stone-900 transition-colors duration-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900 text-sm uppercase tracking-[0.22em] mb-5">{dictionary.common.customerCare}</h4>
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
            <h4 className="text-stone-900 text-sm uppercase tracking-[0.22em] mb-5">{dictionary.common.legal}</h4>
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
