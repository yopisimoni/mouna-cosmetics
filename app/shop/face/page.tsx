import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { getWhatsappOrderLink } from "../../components/site-data";

export default function FacePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Face"
        title="Complexion coming soon"
        description="Face products are planned for a future Mouna Cosmetics edit. Current orders remain focused on gloss and palette bundles."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="border border-stone-200 bg-stone-50 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Coming Soon</p>
            <p className="text-stone-600 font-light leading-relaxed mb-8">Ask about current gloss availability while complexion products are being developed.</p>
            <a href={getWhatsappOrderLink()} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-8 py-4 text-sm uppercase tracking-[0.24em] hover:bg-stone-800 transition-colors duration-300">Order via WhatsApp</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
