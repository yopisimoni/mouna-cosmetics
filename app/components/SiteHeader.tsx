"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderControls } from "./HeaderControls";
import { SearchOverlay } from "./SearchOverlay";
import { useI18n } from "./i18n";
import { mainNavLinks, socialLinks } from "./site-data";

export function SiteHeader() {
  const { dictionary } = useI18n();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 xl:px-12">
          {/* Desktop: single row — left nav | centered logo | right icons */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-14">
            {/* Left nav — all links */}
            <div className="flex items-center gap-5 xl:gap-6">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-stone-600 hover:text-stone-900 transition-all duration-300 text-[0.78rem] tracking-[0.12em] font-normal"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Centered logo — real image */}
            <Link href="/" className="justify-self-center text-center flex flex-col items-center">
              <Image
                src="/assets/mouna/logo.png"
                alt="Mouna Cosmetics"
                width={120}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
              <span className="text-[0.5rem] tracking-[0.35em] text-stone-400 mt-0.5 font-light">
                FREE GLOW
              </span>
            </Link>

            {/* Right icons — controls + account + search + cart */}
            <div className="flex items-center justify-end gap-3 xl:gap-4">
              <HeaderControls />
              {/* Account icon — links to sign in */}
              <Link
                href="/signin"
                aria-label="Account"
                className="text-stone-500 hover:text-stone-900 transition-colors"
              >
                <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              {/* Search icon — opens overlay */}
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="text-stone-500 hover:text-stone-900 transition-colors"
              >
                <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* Cart icon */}
              <Link
                href="/product/lip-gloss"
                aria-label="Cart coming soon. Order via WhatsApp."
                className="relative text-stone-500 hover:text-stone-900 transition-colors"
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
              <Link href="/" className="text-center flex flex-col items-center">
                <Image
                  src="/assets/mouna/logo.png"
                  alt="Mouna Cosmetics"
                  width={90}
                  height={27}
                  className="h-6 sm:h-7 w-auto object-contain"
                  priority
                />
                <span className="text-[0.4rem] tracking-[0.3em] text-stone-400 mt-0 font-light">
                  FREE GLOW
                </span>
              </Link>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <svg className="h-[16px] w-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <Link
                  href="/product/lip-gloss"
                  aria-label="Cart coming soon. Order via WhatsApp."
                  className="relative text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <span className="sr-only">Cart coming soon</span>
                  <svg className="h-[16px] w-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
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

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}


