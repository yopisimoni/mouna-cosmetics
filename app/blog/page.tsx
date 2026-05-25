"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";

const blogPosts = [
  {
    slug: "how-to-choose-the-right-lip-gloss-shade",
    category: "Beauty Tips",
    title: "How to Choose the Right Lip Gloss Shade",
    excerpt:
      "Not sure which gloss shade suits you best? From Aura's soft pink to Amour's deeper berry, find the perfect match for your skin tone and occasion.",
    image: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.04.jpeg",
  },
  {
    slug: "lip-gloss-vs-lip-balm",
    category: "Product Guide",
    title: "Lip Gloss vs Lip Balm: What's the Difference?",
    excerpt:
      "Both hydrate, but they serve different purposes. Learn when to reach for a high-shine gloss and when a balm is the better choice for your lips.",
    image: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.05.jpeg",
  },
  {
    slug: "why-bundle-offers-save-you-more",
    category: "Savings",
    title: "Why Bundle Offers Save You More",
    excerpt:
      "Stacking your favourite gloss shades or pairing a palette with glosses can save you up to 175dh. Here's how our bundles work and why they're worth it.",
    image: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.06.jpeg",
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-stone-200 bg-stone-50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">
                    {post.category}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-light text-stone-900 mb-4 tracking-wide font-['var(--font-playfair)']">
                    {post.title}
                  </h2>
                  <p className="text-stone-600 text-sm leading-relaxed font-light tracking-wide mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/coming-soon"
                    className="inline-block text-xs uppercase tracking-[0.25em] text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
