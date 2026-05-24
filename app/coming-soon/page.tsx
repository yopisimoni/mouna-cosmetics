import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { socialLinks } from "../components/site-data";

const launches = [
  {
    name: "New Gloss Shades",
    detail: "Soft shine shades designed for everyday wear and evening glow.",
    image: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.08.jpeg",
  },
  {
    name: "Curated Lip Sets",
    detail: "Bundle-ready gloss pairings for gifting, travel, and self-care routines.",
    image: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.10.jpeg",
  },
  {
    name: "Beauty Palette Restock",
    detail: "A polished palette moment to pair with your favorite Mouna gloss.",
    image: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.11.jpeg",
  },
];

export default function ComingSoonPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Coming Soon"
        title="Next from Mouna"
        description="Upcoming products and launches are being prepared with the same soft shine, refined finish, and giftable presentation."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {launches.map((launch) => (
              <div key={launch.name} className="bg-stone-50 border border-stone-200">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image src={launch.image} alt={launch.name} fill className="object-cover" />
                </div>
                <div className="p-7">
                  <h2 className="text-stone-900 text-2xl font-light mb-4 tracking-wide font-['var(--font-playfair)']">
                    {launch.name}
                  </h2>
                  <p className="text-stone-600 leading-relaxed font-light tracking-wide">{launch.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-stone-900 text-white text-sm tracking-[0.25em] hover:bg-stone-800 transition-all duration-300"
            >
              WATCH LAUNCH UPDATES
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
