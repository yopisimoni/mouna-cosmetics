import { CategoryGrid, ProductCard } from "../components/ShopPreview";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { getWhatsappOrderLink } from "../components/site-data";

const comingSoonProducts = [
  "Beauty Palette Restock",
  "New Gloss Shades",
  "Skin & Body Ritual",
];

export default function ShopPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Shop All"
        title="Mouna Beauty Edit"
        description="Explore the current lip gloss collection and future beauty categories prepared for a richer storefront experience."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <CategoryGrid />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3">Available now</p>
              <h2 className="text-4xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
                Current Products
              </h2>
            </div>
            <a
              href={getWhatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-stone-900 px-6 py-3 text-xs uppercase tracking-[0.22em] text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300"
            >
              Order via WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ProductCard />
          </div>
          <div className="bg-stone-50 border border-stone-200 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Coming soon</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {comingSoonProducts.map((product) => (
                <div key={product} className="border border-stone-200 bg-white p-6">
                  <h3 className="text-xl font-light text-stone-900 mb-3 tracking-wide">{product}</h3>
                  <p className="text-sm font-light leading-relaxed tracking-wide text-stone-600">
                    In development for future Mouna Cosmetics launches.
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
