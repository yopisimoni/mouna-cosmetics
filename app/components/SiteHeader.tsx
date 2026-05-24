"use client";

import Link from "next/link";
import { HeaderControls } from "./HeaderControls";
import { useI18n } from "./i18n";
import { mainNavLinks, socialLinks } from "./site-data";

export function SiteHeader() {
  const { dictionary } = useI18n();

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 xl:px-12">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-16 gap-4 py-3">
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {mainNavLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-stone-700 hover:text-stone-950 transition-all duration-300 text-[0.82rem] tracking-[0.13em] font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden items-center gap-4 text-xs tracking-[0.16em] text-stone-700">
            <Link href="/shop" className="hover:text-stone-950 transition-colors">
              Shop
            </Link>
            <Link href="/shop/lips" className="hover:text-stone-950 transition-colors">
              Lips
            </Link>
          </div>
          <Link href="/" className="justify-self-center text-center">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-light tracking-[0.23em] text-stone-900 font-['var(--font-playfair)'] leading-none">
                {dictionary.common.brand}
              </span>
              <span className="text-[0.55rem] tracking-[0.34em] text-stone-500 mt-1 uppercase">
                {dictionary.common.cosmetics}
              </span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center justify-end gap-5 xl:gap-6">
            {mainNavLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-stone-700 hover:text-stone-950 transition-all duration-300 text-[0.82rem] tracking-[0.13em] font-light"
              >
                {link.label}
              </Link>
            ))}
            <div className="hidden xl:block">
              <HeaderControls />
            </div>
            <Link
              href="/product/lip-gloss"
              aria-label="Cart coming soon. Order via WhatsApp."
              className="relative mr-2 text-stone-700 hover:text-stone-950 transition-colors"
            >
              <span className="sr-only">Cart coming soon</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 11H6L5 9z" />
              </svg>
              <span className="absolute -right-2 -top-2 h-4 min-w-4 px-1 rounded-full bg-stone-900 text-white text-[0.58rem] leading-4 text-center">0</span>
            </Link>
          </div>
          <div className="flex lg:hidden justify-end items-center gap-4">
            <Link
              href="/product/lip-gloss"
              aria-label="Cart coming soon. Order via WhatsApp."
              className="relative mr-1 text-stone-700 hover:text-stone-950 transition-colors"
            >
              <span className="sr-only">Cart coming soon</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 11H6L5 9z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex xl:hidden items-center justify-between gap-4 border-t border-stone-200/70 py-2.5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-stone-600">
            {mainNavLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-stone-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <HeaderControls />
        </div>
        <div className="md:hidden border-t border-stone-200/70 py-2.5">
          <div className="flex justify-between text-[0.66rem] uppercase tracking-[0.14em] text-stone-500 mb-2.5">
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
    </nav>
  );
}
