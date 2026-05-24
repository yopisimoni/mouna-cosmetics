"use client";

import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";

export default function TermsOfUsePage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.terms.eyebrow}
        title={dictionary.terms.title}
        description={dictionary.terms.description}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          {dictionary.terms.sections.map(([title, text]) => (
            <section key={title} className="border-b border-stone-200 pb-8">
              <h2 className="text-stone-900 text-2xl font-light mb-4 tracking-wide font-['var(--font-playfair)']">
                {title}
              </h2>
              <p className="text-stone-600 leading-relaxed font-light tracking-wide">{text}</p>
            </section>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
