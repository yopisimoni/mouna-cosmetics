"use client";

import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";

export default function BlogPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.blog.eyebrow}
        title={dictionary.blog.title}
        description={dictionary.blog.description}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dictionary.blog.articles.map(([category, title, description]) => (
              <article key={title} className="border border-stone-200 bg-stone-50 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-5">{category}</p>
                <h2 className="text-2xl font-light text-stone-900 mb-5 tracking-wide font-['var(--font-playfair)']">
                  {title}
                </h2>
                <p className="text-stone-600 leading-relaxed font-light tracking-wide mb-8">{description}</p>
                <span className="inline-block text-xs uppercase tracking-[0.25em] text-stone-500">
                  {dictionary.blog.comingSoon}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
