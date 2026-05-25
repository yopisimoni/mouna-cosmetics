"use client";

import { CategoryGrid, ProductCard } from "../components/ShopPreview";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";
import { getWhatsappOrderLink } from "../components/site-data";

const comingSoonProducts = [
  "Beauty Palette Restock",
  "New Gloss Shades",
  "Skin & Body Ritual",
];

export default function ShopPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      <PageHero
        eyebrow={dictionary.shop.eyebrow}
        title={dictionary.shop.title}
        description={dictionary.shop.description}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <CategoryGrid />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3">{dictionary.shop.availableNow}</p>
              <h2 className="text-4xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
                {dictionary.shop.currentProducts}
              </h2>
            </div>
            <a
              href={getWhatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-stone-900 px-6 py-3 text-xs uppercase tracking-[0.22em] text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300"
            >
              {dictionary.common.orderWhatsapp}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ProductCard />
          </div>
          <div className="bg-stone-50 border border-stone-200 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">{dictionary.shop.comingSoon}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {comingSoonProducts.map((product) => (
                <div key={product} className="border border-stone-200 bg-white p-6">
                  <h3 className="text-xl font-light text-stone-900 mb-3 tracking-wide">{product}</h3>
                  <p className="text-sm font-light leading-relaxed tracking-wide text-stone-600">
                    {dictionary.shop.inDevelopment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
