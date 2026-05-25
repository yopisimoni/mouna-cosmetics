"use client";

import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { useI18n } from "../../components/i18n";
import { getWhatsappOrderLink } from "../../components/site-data";

export default function SkinBodyPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.common.skinBody}
        title="Rituals in progress"
        description="Skin and body products are not available yet, but this category is ready for future launches and care-focused edits."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="border border-stone-200 bg-stone-50 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">{dictionary.common.comingSoon}</p>
            <p className="text-stone-600 font-light leading-relaxed mb-8">{dictionary.common.followMouna}</p>
            <a href={getWhatsappOrderLink()} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-8 py-4 text-sm uppercase tracking-[0.24em] hover:bg-stone-800 transition-colors duration-300">{dictionary.common.orderWhatsapp}</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
