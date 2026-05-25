"use client";

import Link from "next/link";
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
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border border-stone-200 bg-stone-50 p-8 text-center">
            <p className="text-sm font-light text-stone-600 leading-relaxed mb-4">
              For detailed shipping, return, and payment policies, visit our dedicated page.
            </p>
            <Link
              href="/shipping-returns"
              className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-[0.22em] hover:bg-stone-800 transition-colors duration-300"
            >
              View Shipping & Returns
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
