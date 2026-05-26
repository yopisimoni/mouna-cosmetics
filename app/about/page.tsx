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

      {/* Brand Story — image + body */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 order-2 lg:order-1">
            <Image
              src="/assets/mouna/story/WhatsApp Image 2026-05-25 at 22.06.40.jpeg"
              alt="Mouna Cosmetics gloss collection"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-6">
              {dictionary.about.bodyOne}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-8">
              {dictionary.about.bodyTwo}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {dictionary.about.values.map((value: string) => (
                <div key={value} className="border border-stone-200 bg-stone-50 p-5 text-center">
                  <p className="text-stone-900 text-sm tracking-[0.18em] uppercase">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft separator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-stone-200/60" />
      </div>

      {/* Why Mouna Cosmetics */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
              {dictionary.about.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-[0.08em] font-['var(--font-playfair)']">
              {dictionary.about.whyTitle}
            </h2>
          </div>
          <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide max-w-3xl mx-auto text-center mb-14">
            {dictionary.about.whyDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: dictionary.about.whyItem1Title, desc: dictionary.about.whyItem1Desc },
              { title: dictionary.about.whyItem2Title, desc: dictionary.about.whyItem2Desc },
              { title: dictionary.about.whyItem3Title, desc: dictionary.about.whyItem3Desc },
            ].map((item) => (
              <div key={item.title} className="border border-stone-200 bg-stone-50 p-8 text-center">
                <h3 className="text-stone-900 text-lg font-light tracking-wide mb-4 font-['var(--font-playfair)']">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft separator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-stone-200/60" />
      </div>

      {/* Carefully Formulated */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
            <Image
              src="/assets/mouna/story/WhatsApp Image 2026-05-25 at 22.09.02.jpeg"
              alt="Mouna Cosmetics formulation"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
              {dictionary.about.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-[0.08em] mb-8 font-['var(--font-playfair)']">
              {dictionary.about.formulatedTitle}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide">
              {dictionary.about.formulatedDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Soft separator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-stone-200/60" />
      </div>

      {/* All Time Essentials */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
              {dictionary.about.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-[0.08em] mb-8 font-['var(--font-playfair)']">
              {dictionary.about.essentialsTitle}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide">
              {dictionary.about.essentialsDesc}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 order-1 lg:order-2">
            <Image
              src="/assets/mouna/story/WhatsApp Image 2026-05-25 at 22.10.00.jpeg"
              alt="Mouna Cosmetics essentials"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Soft separator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-stone-200/60" />
      </div>

      {/* Community First */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
            {dictionary.about.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-[0.08em] mb-8 font-['var(--font-playfair)']">
            {dictionary.about.communityTitle}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            {dictionary.about.communityDesc}
          </p>
        </div>
      </section>

      {/* Soft separator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-stone-200/60" />
      </div>

      {/* Free Glow Since Day One */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
            {dictionary.about.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-900 tracking-[0.08em] mb-8 font-['var(--font-playfair)']">
            {dictionary.about.glowTitle}
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            {dictionary.about.glowDesc}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
