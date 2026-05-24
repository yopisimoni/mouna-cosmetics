import Link from "next/link";
import { footerLinks, socialLinks } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-light mb-6 tracking-[0.2em] font-['var(--font-playfair)']">
              MOUNA
            </h3>
            <p className="text-sm font-light tracking-wide leading-relaxed">
              Luxury cosmetics for the modern individual.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-light mb-6 tracking-[0.15em]">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 text-sm font-light tracking-wide">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-light mb-6 tracking-[0.15em]">Connect</h3>
            <ul className="space-y-3 text-sm font-light tracking-wide">
              <li>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-sm font-light tracking-wide">
          <p>&copy; 2026 Mouna Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
