"use client";

import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { getWhatsappOrderLink } from "../components/site-data";

const shippingContent = [
  {
    title: "Shipping",
    items: [
      "We currently deliver across Morocco.",
      "Delivery times may vary depending on city and order volume.",
      "Orders are confirmed through WhatsApp before shipping.",
      "Free shipping is available on orders above 395dh.",
      "Shipping fees for smaller orders are confirmed during order confirmation.",
    ],
  },
  {
    title: "Returns & Exchanges",
    items: [
      "If an order arrives damaged or incorrect, customers should contact us within 48 hours of receiving it.",
      "Exchanges may be accepted for unused products in original condition.",
      "Due to hygiene reasons, opened beauty products may not be eligible for return.",
      "Each request is reviewed individually to ensure customer satisfaction.",
    ],
  },
  {
    title: "Payment",
    items: [
      "Payment on delivery is currently available.",
      "Orders are confirmed through WhatsApp before shipping.",
    ],
  },
];

export default function ShippingReturnsPage() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">Policies</p>
            <h1 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
              Shipping & Returns
            </h1>
            <p className="text-stone-600 font-light tracking-wide mt-4 text-sm max-w-2xl mx-auto">
              Clear information about delivery, returns, exchanges, and payment before you place your order.
            </p>
          </div>

          <div className="space-y-10">
            {shippingContent.map((section) => (
              <div key={section.title} className="border border-stone-200 bg-stone-50 p-8 sm:p-10">
                <h2 className="text-2xl font-light text-stone-900 mb-6 tracking-[0.12em] font-['var(--font-playfair)']">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-600 font-light leading-relaxed tracking-wide">
                      <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-stone-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-stone-200 bg-stone-50 p-8 text-center">
            <p className="text-sm font-light text-stone-600 leading-relaxed mb-4">
              Have a question about shipping or returns? Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-[0.22em] hover:bg-stone-800 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <a
                href={getWhatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-stone-900 text-stone-900 px-8 py-3 text-xs uppercase tracking-[0.22em] hover:bg-stone-900 hover:text-white transition-colors duration-300"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
