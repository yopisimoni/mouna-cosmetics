"use client";

import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";
import { socialLinks } from "../components/site-data";

const launchImages = [
  "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.08.jpeg",
  "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.10.jpeg",
  "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.11.jpeg",
];

export default function ComingSoonPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.launches.eyebrow}
        title={dictionary.launches.title}
        description={dictionary.launches.description}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {dictionary.launches.items.map(([name, detail], index) => (
              <div key={name} className="bg-stone-50 border border-stone-200">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image src={launchImages[index]} alt={name} fill className="object-cover" />
                </div>
                <div className="p-7">
                  <h2 className="text-stone-900 text-2xl font-light mb-4 tracking-wide font-['var(--font-playfair)']">
                    {name}
                  </h2>
                  <p className="text-stone-600 leading-relaxed font-light tracking-wide">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-stone-900 text-white text-sm tracking-[0.25em] hover:bg-stone-800 transition-all duration-300"
            >
              {dictionary.launches.watch}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
