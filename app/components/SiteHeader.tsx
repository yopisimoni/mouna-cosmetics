"use client";

import Link from "next/link";
import { HeaderControls } from "./HeaderControls";
import { useI18n } from "./i18n";
import { mainNavLinks, socialLinks } from "./site-data";

export function SiteHeader() {
  const { dictionary } = useI18n();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 xl:px-12">
        {/* Desktop: left nav | centered logo | right nav + controls + cart */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-14">
          {/* Left nav */}
          <div className="flex items-center gap-6 xl:gap-8">
            {mainNavLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-stone-600 hover:text-stone-900 transition-all duration-300 text-[0.8rem] tracking-[0.12em] font-normal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered logo */}
          <Link href="/" className="justify-self-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl font-light tracking-[0.25em] text-stone-900 font-['var(--font-playfair)'] leading-none">
                {dictionary.common.brand}
              </span>
              <span className="text-[0.5rem] tracking-[0.38em] text-stone-400 mt-0.5 uppercase font-light">
                {dictionary.common.cosmetics}
              </span>
            </div>
          </Link>

          {/* Right nav + controls + cart */}
          <div className="flex items-center justify-end gap-6 xl:gap-8">
            {mainNavLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-stone-600 hover:text-stone-900 transition-all duration-300 text-[0.8rem] tracking-[0.12em] font-normal"
              >
                {link.label}
              </Link>
            ))}
            <div className="hidden xl:flex items-center gap-2">
              <HeaderControls />
            </div>
            <Link
              href="/product/lip-gloss"
              aria-label="Cart coming soon. Order via WhatsApp."
              className="relative text-stone-600 hover:text-stone-900 transition-colors"
            >
              <span className="sr-only">Cart coming soon</span>
              <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 11H6L5 9z" />
              </svg>
              <span className="absolute -right-1.5 -top-1.5 h-3.5 min-w-3.5 px-1 rounded-full bg-stone-900 text-white text-[0.5rem] leading-3.5 text-center">0</span>
            </Link>
          </div>
        </div>

        {/* Tablet / Mobile */}
        <div className="lg:hidden">
          {/* Logo row */}
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.14em] text-stone-500">
              <Link href="/shop" className="hover:text-stone-900 transition-colors">
                Shop
              </Link>
              <Link href="/shop/lips" className="hover:text-stone-900 transition-colors">
                Lips
              </Link>
            </div>
            <Link href="/" className="text-center">
              <div className="flex flex-col items-center">
                <span className="text-base font-light tracking-[0.25em] text-stone-900 font-['var(--font-playfair)'] leading-none">
                  {dictionary.common.brand}
                </span>
                <span className="text-[0.48rem] tracking-[0.38em] text-stone-400 mt-0.5 uppercase font-light">
                  {dictionary.common.cosmetics}
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/product/lip-gloss"
                aria-label="Cart coming soon. Order via WhatsApp."
                className="relative text-stone-600 hover:text-stone-900 transition-colors"
              >
                <span className="sr-only">Cart coming soon</span>
                <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 11H6L5 9z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Tablet nav row */}
          <div className="hidden md:flex items-center justify-between border-t border-stone-200/60 py-2">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-stone-500">
              {mainNavLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-stone-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <HeaderControls />
          </div>

          {/* Mobile nav row */}
          <div className="md:hidden border-t border-stone-200/60 py-2">
            <div className="flex justify-between text-[0.6rem] uppercase tracking-[0.14em] text-stone-400 mb-2">
              <Link href="/shop/eyes" className="hover:text-stone-900 transition-colors">
                Eyes
              </Link>
              <Link href="/shop/face" className="hover:text-stone-900 transition-colors">
                Face
              </Link>
              <Link href="/shop/skin-body" className="hover:text-stone-900 transition-colors">
                Skin
              </Link>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 transition-colors"
              >
                {dictionary.common.tiktok}
              </a>
            </div>
            <HeaderControls />
          </div>
        </div>
      </div>
    </header>
  );
}
