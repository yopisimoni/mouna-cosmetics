"use client";

import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useI18n } from "./components/i18n";
import { getWhatsappOrderLink, socialLinks } from "./components/site-data";

export default function Home() {
  const { dictionary } = useI18n();
  const products = ["Aura Lip Gloss", "Candy Lip Gloss", "Amour Lip Gloss"];
  const productImages = [
    "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.04.jpeg",
    "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.05.jpeg",
    "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.06.jpeg",
  ];
  const bundles = [
    { name: "2 Glosses", price: "225dh", saving: "25dh" },
    { name: "3 Glosses", price: "299dh", saving: "76dh" },
    { name: "Palette", price: "299dh" },
    { name: "Palette + 1 Gloss", price: "395dh", saving: "29dh" },
    { name: "Palette + 2 Glosses", price: "449dh", saving: "100dh" },
    { name: "Palette + 3 Glosses", price: "499dh", saving: "175dh" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.13 (1).jpeg"
            alt="Mouna Cosmetics Luxury Beauty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/40 to-stone-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-8 tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] font-['var(--font-playfair)'] leading-tight">
            {dictionary.common.brandFull}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-100 mb-12 font-light tracking-[0.15em] opacity-95">
            {dictionary.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-stone-900 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] hover:bg-stone-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {dictionary.home.shopSoon}
            </button>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-white/60 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              {dictionary.home.contactInstagram}
            </a>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-12 tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.storyTitle}</h2>
          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed mb-8 font-light tracking-wide">
            {dictionary.home.storyOne}
          </p>
          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed font-light tracking-wide">
            {dictionary.home.storyTwo}
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 sm:py-36 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.featuredProducts}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product} className="bg-white p-6 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] mb-6 flex items-center justify-center overflow-hidden bg-stone-100">
                  <Image
                    src={productImages[index]}
                    alt={product}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-stone-900 font-light mb-2 tracking-wide text-lg">{product}</h3>
                <p className="text-stone-600 text-sm font-light tracking-wide mb-3">125dh</p>
                <a
                  href={getWhatsappOrderLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border border-stone-900 text-stone-900 text-xs tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  {dictionary.home.orderWhatsapp}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Bundles */}
      <section className="py-24 sm:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.bundleTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((bundle) => (
              <div key={bundle.name} className="bg-stone-50 p-6 text-center border border-stone-200 hover:border-stone-400 transition-all duration-300">
                <h3 className="text-stone-900 font-light mb-2 tracking-wide text-lg">{bundle.name}</h3>
                <p className="text-stone-600 text-sm font-light tracking-wide mb-1">{bundle.price}</p>
                {bundle.saving ? (
                  <p className="text-stone-400 text-xs font-light tracking-wide">{dictionary.home.save} {bundle.saving}</p>
                ) : null}
              </div>
            ))}
            <div className="bg-stone-900 p-6 text-center col-span-1 sm:col-span-2">
              <h3 className="text-white font-light mb-2 tracking-wide text-lg">{dictionary.home.freeShipping}</h3>
              <p className="text-stone-300 text-sm font-light tracking-wide">{dictionary.home.freeShippingNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-24 sm:py-36 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.whyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-stone-900 font-light mb-3 tracking-wide text-lg">{dictionary.home.benefitOneTitle}</h3>
              <p className="text-stone-600 text-sm font-light tracking-wide">{dictionary.home.benefitOneText}</p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-stone-900 font-light mb-3 tracking-wide text-lg">{dictionary.home.benefitTwoTitle}</h3>
              <p className="text-stone-600 text-sm font-light tracking-wide">{dictionary.home.benefitTwoText}</p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-stone-900 font-light mb-3 tracking-wide text-lg">{dictionary.home.benefitThreeTitle}</h3>
              <p className="text-stone-600 text-sm font-light tracking-wide">{dictionary.home.benefitThreeText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 sm:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.gallery}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.07.jpeg"
                alt="Gallery 1"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.08.jpeg"
                alt="Gallery 2"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.09.jpeg"
                alt="Gallery 3"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.10.jpeg"
                alt="Gallery 4"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.11.jpeg"
                alt="Gallery 5"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.13.jpeg"
                alt="Gallery 6"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.14.jpeg"
                alt="Gallery 7"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.14 (1).jpeg"
                alt="Gallery 8"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 sm:py-36 bg-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-8 tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.contactTitle}</h2>
          <p className="text-stone-300 text-lg sm:text-xl mb-12 font-light tracking-wide">
            {dictionary.home.contactText}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-stone-900 text-sm tracking-[0.25em] hover:bg-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {dictionary.home.followInstagram}
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-stone-100 text-stone-900 text-sm tracking-[0.25em] hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {dictionary.home.followTiktok}
            </a>
            <a
              href={getWhatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/60 text-white text-sm tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              {dictionary.home.contactWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
