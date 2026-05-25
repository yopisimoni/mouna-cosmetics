"use client";

import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { getWhatsappOrderLink } from "../components/site-data";

const dashboardSections = [
  {
    title: "Orders",
    description: "View your order history and track current orders.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 11H6L5 9z" />
      </svg>
    ),
  },
  {
    title: "Profile",
    description: "Manage your name, email, and shipping details.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Wishlist",
    description: "Save your favourite shades and bundles.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Rewards",
    description: "Earn points on every order and unlock exclusive perks.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function AccountPage() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">Account</p>
            <h1 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
              My Account
            </h1>
            <p className="text-stone-600 font-light tracking-wide mt-4 text-sm">
              Your account dashboard is coming soon. Here&#39;s a preview of what&#39;s to come.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {dashboardSections.map((section) => (
              <div
                key={section.title}
                className="border border-stone-200 bg-stone-50 p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-light text-stone-900 mb-3 tracking-wide font-['var(--font-playfair)']">
                  {section.title}
                </h2>
                <p className="text-sm font-light text-stone-600 leading-relaxed mb-4">
                  {section.description}
                </p>
                <span className="inline-block text-xs uppercase tracking-[0.22em] text-stone-400 border border-stone-200 px-4 py-1.5">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>

          <div className="border border-stone-200 bg-stone-50 p-8 text-center">
            <p className="text-sm font-light text-stone-600 leading-relaxed mb-4">
              In the meantime, you can browse our collection and place orders directly through WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/shop"
                className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-[0.22em] hover:bg-stone-800 transition-colors duration-300"
              >
                Browse Shop
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
