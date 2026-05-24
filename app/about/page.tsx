import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="Beauty with a soft signature"
        description="Mouna Cosmetics creates polished lip gloss essentials for everyday confidence, special moments, and the quiet ritual of taking care of yourself."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] relative overflow-hidden bg-stone-100">
            <Image
              src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.14.jpeg"
              alt="Mouna Cosmetics gloss collection"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-6">
              The brand is built around luminous finishes, comfortable textures, and shades that feel easy to wear. Each detail is chosen to make beauty feel refined without being complicated.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-8">
              From soft everyday gloss to gift-ready bundles, Mouna Cosmetics focuses on products that look elegant on the vanity and effortless on the lips.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["High-shine", "Clean feel", "Gift ready"].map((value) => (
                <div key={value} className="border border-stone-200 bg-stone-50 p-5 text-center">
                  <p className="text-stone-900 text-sm tracking-[0.18em] uppercase">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
