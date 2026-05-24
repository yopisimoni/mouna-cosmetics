import Link from "next/link";
import { HeaderControls } from "./HeaderControls";
import { mainNavLinks, socialLinks } from "./site-data";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center min-h-20 gap-6 py-4">
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-[0.25em] text-stone-900 font-['var(--font-playfair)'] leading-none">
                MOUNA
              </span>
              <span className="text-[0.6rem] tracking-[0.4em] text-stone-500 mt-1 uppercase">
                Cosmetics
              </span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.15em] font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden xl:block">
            <HeaderControls />
          </div>
          <div className="hidden md:flex lg:hidden flex-wrap justify-end gap-x-5 gap-y-2">
            {mainNavLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-stone-900 transition-all duration-300 text-xs tracking-[0.14em] font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden gap-4 text-xs tracking-[0.18em] text-stone-600">
            <Link href="/about" className="hover:text-stone-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-stone-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:block xl:hidden border-t border-stone-200/70 py-3">
          <HeaderControls />
        </div>
        <div className="md:hidden border-t border-stone-200/70 py-3">
          <div className="flex justify-between text-[0.68rem] uppercase tracking-[0.16em] text-stone-500 mb-3">
            <Link href="/coming-soon" className="hover:text-stone-900 transition-colors">
              Launches
            </Link>
            <Link href="/blog" className="hover:text-stone-900 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-stone-900 transition-colors">
              FAQ
            </Link>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              TikTok
            </a>
          </div>
          <HeaderControls />
        </div>
      </div>
    </nav>
  );
}
