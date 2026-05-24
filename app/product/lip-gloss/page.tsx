"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PageShell } from "../../components/PageShell";
import { getWhatsappMessageLink } from "../../components/site-data";

const shades = ["Aura", "Candy", "Amour"];

const bundleOptions = [
  { label: "1 gloss", price: "125dh", saving: "" },
  { label: "2 glosses", price: "225dh", saving: "Save 25dh" },
  { label: "3 glosses", price: "299dh", saving: "Save 76dh" },
];

const paletteBundles = [
  { label: "Palette", price: "299dh", saving: "" },
  { label: "Palette + 1 gloss", price: "395dh", saving: "Save 29dh" },
  { label: "Palette + 2 glosses", price: "449dh", saving: "Save 100dh" },
  { label: "Palette + 3 glosses", price: "499dh", saving: "Save 175dh" },
];

const productDetails = [
  {
    title: "Benefits",
    items: ["High-shine finish", "Comfortable feel", "Soft tint for everyday wear", "Easy to layer with liner or balm"],
  },
  {
    title: "How to use",
    items: ["Apply directly to bare lips.", "Layer one extra coat for more shine.", "Reapply after meals or whenever you want a fresh glossy finish."],
  },
  {
    title: "Formula notes",
    items: ["Shea butter enriched", "Vegan and cruelty-free positioning", "Paraben-free and gluten-free positioning", "Designed for a glossy finish without a heavy feel"],
  },
];

const miniFaqs = [
  ["Can I order more than one shade?", "Yes. Choose one shade here, then mention additional shades in WhatsApp before confirming your order."],
  ["How is payment handled?", "Payment and delivery details are confirmed directly through WhatsApp."],
  ["When does free shipping apply?", "Free shipping is available from 395dh."],
];

export default function LipGlossProductPage() {
  const [shade, setShade] = useState(shades[0]);
  const [quantity, setQuantity] = useState(1);
  const [bundle, setBundle] = useState(bundleOptions[0].label);

  const whatsappLink = useMemo(() => {
    const message = `Hello Mouna Cosmetics, I would like to order Mouna Lip Gloss. Shade: ${shade}. Bundle: ${bundle}. Quantity: ${quantity}.`;
    return getWhatsappMessageLink(message);
  }, [bundle, quantity, shade]);

  return (
    <PageShell>
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            {[
              "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.04.jpeg",
              "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.05.jpeg",
              "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.06.jpeg",
              "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.08.jpeg",
            ].map((src, index) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <Image
                  src={src}
                  alt={`Mouna Lip Gloss ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 self-start">
            <div className="flex items-center justify-between gap-4 mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Lips</p>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Order via WhatsApp</p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light text-stone-900 mb-5 tracking-[0.12em] font-['var(--font-playfair)']">
              Mouna Lip Gloss
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed font-light tracking-wide mb-8">
              A high-shine, comfortable gloss available in Aura, Candy, and Amour. Choose your shade and preferred bundle, then order directly through WhatsApp.
            </p>
            <p className="text-2xl text-stone-900 font-light tracking-[0.12em] mb-8">125dh</p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Shade</p>
                  <p className="text-sm font-light text-stone-600">Selected: {shade}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {shades.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setShade(item)}
                      className={`border px-4 py-3 text-sm tracking-[0.14em] transition-colors duration-300 ${
                        shade === item
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-200 text-stone-700 hover:border-stone-900"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-4">Quantity</p>
                <div className="inline-flex border border-stone-200">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="h-12 w-12 text-stone-700 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="h-12 w-14 flex items-center justify-center border-x border-stone-200 text-stone-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="h-12 w-12 text-stone-700 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-4">Gloss Bundles</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {bundleOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setBundle(option.label)}
                      className={`border p-4 text-left transition-colors duration-300 ${
                        bundle === option.label
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-900"
                      }`}
                    >
                      <span className="block text-sm tracking-wide">{option.label}</span>
                      <span className="block text-lg mt-2">{option.price}</span>
                      {option.saving ? <span className="block text-xs mt-1 opacity-75">{option.saving}</span> : null}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-stone-900 text-white px-8 py-4 text-sm uppercase tracking-[0.24em] hover:bg-stone-800 transition-colors duration-300"
              >
                Order via WhatsApp
              </a>
              <div className="border border-stone-200 bg-stone-50 p-4 text-sm font-light tracking-wide text-stone-600">
                <p className="mb-1 text-stone-900">Order summary</p>
                <p>Shade: {shade} · Bundle: {bundle} · Quantity: {quantity}</p>
                <p className="mt-2 text-xs text-stone-500">Cart coming soon. Orders are confirmed by WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {productDetails.map((detail) => (
            <div key={detail.title} className="border border-stone-200 bg-stone-50 p-7">
              <h2 className="text-2xl font-light text-stone-900 mb-5 tracking-wide font-['var(--font-playfair)']">
                {detail.title}
              </h2>
              <ul className="space-y-3 text-sm font-light leading-relaxed tracking-wide text-stone-600">
                {detail.items.map((item) => (
                  <li key={item} className="border-b border-stone-200 pb-3 last:border-b-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Bundles</p>
              <h2 className="text-4xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
                Palette & Gloss Sets
              </h2>
            </div>
            <p className="text-stone-600 font-light tracking-wide">Free shipping from 395dh</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paletteBundles.map((option) => (
              <div key={option.label} className="border border-stone-200 bg-white p-6">
                <h3 className="text-stone-900 text-xl font-light mb-3 tracking-wide">{option.label}</h3>
                <p className="text-stone-600 mb-2">{option.price}</p>
                {option.saving ? <p className="text-stone-400 text-sm">{option.saving}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4 text-center">Product FAQ</p>
          <h2 className="text-4xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)'] text-center mb-10">
            Before You Order
          </h2>
          <div className="space-y-4">
            {miniFaqs.map(([question, answer]) => (
              <div key={question} className="border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-stone-900 text-lg font-light mb-3 tracking-wide">{question}</h3>
                <p className="text-stone-600 font-light leading-relaxed tracking-wide">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
