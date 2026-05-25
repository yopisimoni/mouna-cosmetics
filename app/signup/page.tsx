"use client";

import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { getWhatsappOrderLink } from "../components/site-data";

export default function SignUpPage() {

  return (
    <PageShell>
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-md mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-4">Account</p>
            <h1 className="text-4xl sm:text-5xl font-light text-stone-900 tracking-[0.12em] font-['var(--font-playfair)']">
              Create Account
            </h1>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="first-name" className="block text-xs uppercase tracking-[0.22em] text-stone-500 mb-2">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Your name"
                className="w-full border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-900 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.22em] text-stone-500 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-900 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs uppercase tracking-[0.22em] text-stone-500 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-900 transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-[0.24em] hover:bg-stone-800 transition-colors duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/signin"
              className="text-xs uppercase tracking-[0.22em] text-stone-500 hover:text-stone-900 transition-colors duration-300"
            >
              Already have an account? Sign In
            </Link>
          </div>

          <div className="mt-10 border border-stone-200 bg-stone-50 p-6 text-center">
            <p className="text-sm font-light text-stone-600 leading-relaxed mb-4">
              Account creation is coming soon. Join the VIP list or order via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-stone-900 text-white px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-stone-800 transition-colors duration-300"
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
