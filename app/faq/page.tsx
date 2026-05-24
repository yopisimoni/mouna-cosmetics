"use client";

import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";

export default function FaqPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.faq.eyebrow}
        title={dictionary.faq.title}
        description={dictionary.faq.description}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-5">
          {dictionary.faq.items.map(([question, answer]) => (
            <div key={question} className="border border-stone-200 bg-stone-50 p-6 sm:p-8">
              <h2 className="text-stone-900 text-xl font-light mb-4 tracking-wide">{question}</h2>
              <p className="text-stone-600 leading-relaxed font-light tracking-wide">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
