import { ProductCard } from "../../components/ShopPreview";
import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { getWhatsappOrderLink } from "../../components/site-data";

export default function LipsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Lips"
        title="Gloss with a polished finish"
        description="Shop Mouna Lip Gloss in Aura, Candy, and Amour. Orders are still handled personally through WhatsApp."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ProductCard />
          </div>
          <a
            href={getWhatsappOrderLink("Mouna Lip Gloss")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-stone-900 text-white px-8 py-4 text-sm uppercase tracking-[0.24em] hover:bg-stone-800 transition-colors duration-300"
          >
            Order via WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
