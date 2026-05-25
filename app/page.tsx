"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useI18n } from "./components/i18n";
import { getWhatsappOrderLink, socialLinks } from "./components/site-data";

const categoryImages = {
  lips: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.04.jpeg",
  eyes: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.11.jpeg",
  face: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.13.jpeg",
  skin: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.14.jpeg",
  bundles: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.08.jpeg",
  comingSoon: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.07.jpeg",
};

const categories = [
  {
    href: "/shop/lips",
    label: "Lips",
    image: categoryImages.lips,
    copy: "High-shine glosses in soft, everyday shades.",
  },
  {
    href: "/shop/eyes",
    label: "Eyes",
    image: categoryImages.eyes,
    copy: "Palettes and eye essentials for a polished look.",
  },
  {
    href: "/shop/face",
    label: "Face",
    image: categoryImages.face,
    copy: "Complexion launches arriving soon.",
  },
  {
    href: "/shop/skin-body",
    label: "Skin & Body",
    image: categoryImages.skin,
    copy: "Care rituals planned for a future edit.",
  },
  {
    href: "/product/lip-gloss",
    label: "Bundles",
    image: categoryImages.bundles,
    copy: "Save on curated gloss and palette sets.",
  },
  {
    href: "/coming-soon",
    label: "Coming Soon",
    image: categoryImages.comingSoon,
    copy: "New shades, palettes, and beauty edits.",
  },
];

const lookCategories = [
  {
    label: "Glossy",
    description: "High-shine finish for a fresh, dewy look.",
    image: categoryImages.lips,
  },
  {
    label: "Natural",
    description: "Soft tints that enhance without overpowering.",
    image: categoryImages.face,
  },
  {
    label: "Nude",
    description: "Warm, neutral tones for everyday elegance.",
    image: categoryImages.skin,
  },
  {
    label: "Glam",
    description: "Bold shimmer and deeper shades for evening.",
    image: categoryImages.eyes,
  },
];

const trustFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Payment on Delivery",
    description: "Pay when you receive. No upfront payment needed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Free Shipping",
    description: "Free delivery on orders from 395dh.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Easy Returns",
    description: "Not satisfied? Contact us within 7 days for an exchange.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Order via WhatsApp",
    description: "Chat with us directly to place your order.",
  },
];

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] font-['var(--font-playfair)'] leading-tight">
            {dictionary.common.brandFull}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-100 mb-10 sm:mb-12 font-light tracking-[0.15em] opacity-95 px-4">
            {dictionary.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center px-4">
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

      {/* Trust / Order Info Bar */}
      <section className="py-10 sm:py-12 bg-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                  {feature.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-stone-900 tracking-wide mb-1">
                  {feature.title}
                </h3>
                <p className="text-[0.65rem] sm:text-xs text-stone-500 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 sm:py-20 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">{dictionary.common.simpleSteps}</p>
          <h2 className="text-3xl sm:text-4xl font-light text-stone-900 mb-10 tracking-[0.12em] font-['var(--font-playfair)']">
            {dictionary.common.howToOrder}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-left">
            {[
              { step: "01", title: dictionary.common.step1Title, desc: dictionary.common.step1Desc },
              { step: "02", title: dictionary.common.step2Title, desc: dictionary.common.step2Desc },
              { step: "03", title: dictionary.common.step3Title, desc: dictionary.common.step3Desc },
            ].map((item) => (
              <div key={item.step} className="border border-stone-200 bg-white p-6 sm:p-8">
                <span className="text-3xl sm:text-4xl font-light text-stone-300 font-['var(--font-playfair)'] block mb-4">{item.step}</span>
                <h3 className="text-base sm:text-lg font-light text-stone-900 mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={getWhatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-stone-900 text-white px-8 py-3 sm:px-10 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.22em] hover:bg-stone-800 transition-colors duration-300"
            >
              {dictionary.home.orderWhatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">Explore</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group block border border-stone-200 bg-stone-50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-[0.12em] font-['var(--font-playfair)']">
                      {category.label}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wide text-stone-600">
                    {category.copy}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Look */}
      <section className="py-20 sm:py-28 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">Find your style</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
              Shop by Look
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {lookCategories.map((look) => (
              <Link
                key={look.label}
                href="/shop/lips"
                className="group block border border-stone-200 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <Image
                    src={look.image}
                    alt={look.label}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-light text-white tracking-[0.12em] font-['var(--font-playfair)']">
                      {look.label}
                    </h3>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-[0.65rem] sm:text-xs font-light leading-relaxed tracking-wide text-stone-600">
                    {look.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-10 sm:mb-12 tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.storyTitle}</h2>
          <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 font-light tracking-wide px-2">
            {dictionary.home.storyOne}
          </p>
          <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed font-light tracking-wide px-2">
            {dictionary.home.storyTwo}
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 sm:py-28 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-12 sm:mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.featuredProducts}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={product} className="bg-white p-4 sm:p-6 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] mb-4 sm:mb-6 flex items-center justify-center overflow-hidden bg-stone-100">
                  <Image
                    src={productImages[index]}
                    alt={product}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-stone-900 font-light mb-2 tracking-wide text-base sm:text-lg">{product}</h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide mb-3 sm:mb-4">125dh</p>
                <a
                  href={getWhatsappOrderLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 sm:px-6 py-2 border border-stone-900 text-stone-900 text-xs tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  {dictionary.home.orderWhatsapp}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Bundles */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-12 sm:mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.bundleTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bundles.map((bundle) => (
              <div key={bundle.name} className="bg-stone-50 p-5 sm:p-6 text-center border border-stone-200 hover:border-stone-400 transition-all duration-300">
                <h3 className="text-stone-900 font-light mb-2 tracking-wide text-base sm:text-lg">{bundle.name}</h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide mb-1">{bundle.price}</p>
                {bundle.saving ? (
                  <p className="text-stone-400 text-[0.65rem] sm:text-xs font-light tracking-wide">{dictionary.home.save} {bundle.saving}</p>
                ) : null}
              </div>
            ))}
            <div className="bg-stone-900 p-5 sm:p-6 text-center col-span-1 sm:col-span-2">
              <h3 className="text-white font-light mb-2 tracking-wide text-base sm:text-lg">{dictionary.home.freeShipping}</h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light tracking-wide">{dictionary.home.freeShippingNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-20 sm:py-28 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-12 sm:mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.whyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-stone-900 font-light mb-3 tracking-wide text-base sm:text-lg">{dictionary.home.benefitOneTitle}</h3>
              <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide">{dictionary.home.benefitOneText}</p>
            </div>
            <div className="bg-white p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-stone-900 font-light mb-3 tracking-wide text-base sm:text-lg">{dictionary.home.benefitTwoTitle}</h3>
              <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide">{dictionary.home.benefitTwoText}</p>
            </div>
            <div className="bg-white p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-stone-900 font-light mb-3 tracking-wide text-base sm:text-lg">{dictionary.home.benefitThreeTitle}</h3>
              <p className="text-stone-600 text-xs sm:text-sm font-light tracking-wide">{dictionary.home.benefitThreeText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-12 sm:mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.gallery}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
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
      <section id="contact" className="py-20 sm:py-28 bg-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8 tracking-[0.15em] font-['var(--font-playfair)']">{dictionary.home.contactTitle}</h2>
          <p className="text-stone-300 text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 font-light tracking-wide px-4">
            {dictionary.home.contactText}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center px-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-stone-900 text-xs sm:text-sm tracking-[0.25em] hover:bg-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {dictionary.home.followInstagram}
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-stone-100 text-stone-900 text-xs sm:text-sm tracking-[0.25em] hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {dictionary.home.followTiktok}
            </a>
            <a
              href={getWhatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-white/60 text-white text-xs sm:text-sm tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
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
