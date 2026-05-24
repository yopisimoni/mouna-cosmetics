import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { getWhatsappOrderLink } from "../../components/site-data";

export default function EyesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Eyes"
        title="Palettes and eye edits"
        description="Eye products are being prepared for future launches. For now, explore the palette bundle options on the lip gloss product page."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-stone-200 bg-stone-50 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Coming Soon</p>
            <h2 className="text-3xl font-light text-stone-900 mb-4 font-['var(--font-playfair)']">Beauty Palette</h2>
            <p className="text-stone-600 font-light leading-relaxed mb-6">Palette bundles are already listed with the gloss offer while the full eyes edit is prepared.</p>
            <a href={getWhatsappOrderLink("Palette bundle")} target="_blank" rel="noopener noreferrer" className="inline-block border border-stone-900 px-6 py-3 text-xs uppercase tracking-[0.22em] text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">Ask on WhatsApp</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
