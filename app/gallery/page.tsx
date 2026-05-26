"use client";

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { useI18n } from "../components/i18n";

type GalleryItem = {
  src: string;
  label: string;
  category: "lips" | "eyes" | "story" | "gallery";
  href: string;
};

const galleryItems: GalleryItem[] = [
  // Lips
  { src: "/assets/mouna/lips/aura1.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura2.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura3.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura4.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura5.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura6.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura7.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/aura8.jpeg", label: "Aura Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy1.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy3.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy4.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy5.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy6.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy7.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy.jpeg", label: "Candy Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/candy-amour.jpeg", label: "Candy & Amour", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/amour1.jpeg", label: "Amour Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/amour2.jpeg", label: "Amour Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/amour4.jpeg", label: "Amour Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/amour5.jpeg", label: "Amour Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/amour6.jpeg", label: "Amour Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  { src: "/assets/mouna/lips/amour7.jpeg", label: "Amour Lip Gloss", category: "lips", href: "/product/lip-gloss" },
  // Eyes
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-23 at 11.53.13 (1).jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-23 at 11.53.14 (2).jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-23 at 11.53.14.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-24 at 22.30.07.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-24 at 22.34.50.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.26.29.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.26.30.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.27.00 (1).jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.27.00.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  { src: "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.27.01.jpeg", label: "Nude Eyeshadow Palette", category: "eyes", href: "/shop/eyes" },
  // Story
  { src: "/assets/mouna/story/WhatsApp Image 2026-05-25 at 22.06.40.jpeg", label: "Brand Story", category: "story", href: "/about" },
  { src: "/assets/mouna/story/WhatsApp Image 2026-05-25 at 22.09.02.jpeg", label: "Carefully Formulated", category: "story", href: "/about" },
  { src: "/assets/mouna/story/WhatsApp Image 2026-05-25 at 22.10.00.jpeg", label: "All Time Essentials", category: "story", href: "/about" },
  // Gallery
  { src: "/assets/mouna/gallery/gallery1.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/gallery2.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/gallery3.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/gallery4.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/gallery5.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/gallery6.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/gallery7.jpeg", label: "Gallery", category: "gallery", href: "/shop" },
  { src: "/assets/mouna/gallery/candy gallary.jpeg", label: "Candy Gallery", category: "gallery", href: "/product/lip-gloss" },
];

const categoryLabels: Record<string, string> = {
  lips: "Lip Gloss",
  eyes: "Eyeshadow Palette",
  story: "Brand Story",
  gallery: "Gallery",
};

export default function GalleryPage() {
  const { dictionary } = useI18n();

  return (
    <PageShell>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-stone-400 mb-4">
            {dictionary.home.gallery}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 dark:text-stone-100 tracking-[0.12em] font-['var(--font-playfair)'] mb-6">
            Mouna Visual Edit
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-base sm:text-lg font-light tracking-wide max-w-2xl mx-auto">
            Browse all brand images — from lip gloss shades to palette details and brand story visuals.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 sm:pb-28 bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {galleryItems.map((item, index) => (
              <Link
                key={`${item.src}-${index}`}
                href={item.href}
                className="group block break-inside-avoid overflow-hidden bg-stone-100 dark:bg-stone-800 relative"
              >
                <div className="relative w-full" style={{ aspectRatio: getAspectRatio(index) }}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <div>
                    <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-white/70 text-[0.6rem] sm:text-xs font-light tracking-wide mt-0.5">
                      {categoryLabels[item.category]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function getAspectRatio(index: number): string {
  // Vary aspect ratios for a more organic masonry feel
  const ratios = ["3/4", "1/1", "4/5", "2/3", "1/1", "3/4", "4/5", "1/1"];
  return ratios[index % ratios.length];
}
