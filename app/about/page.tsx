"use client";

import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";

export default function AboutPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.about.eyebrow}
        title={dictionary.about.title}
        description={dictionary.about.description}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] relative overflow-hidden bg-stone-100">
            <Image
              src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.14.jpeg"
              alt="Mouna Cosmetics gloss collection"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-6">
              {dictionary.about.bodyOne}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-8">
              {dictionary.about.bodyTwo}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {dictionary.about.values.map((value) => (
                <div key={value} className="border border-stone-200 bg-stone-50 p-5 text-center">
                  <p className="text-stone-900 text-sm tracking-[0.18em] uppercase">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
