"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SearchResult = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  href: string;
  matchField: string;
};

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const prevOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      // Focus input when overlay opens
      setTimeout(() => inputRef.current?.focus(), 100);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    prevOpenRef.current = isOpen;
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset query when overlay closes (separate from effect that manages body scroll)
  useEffect(() => {
    if (!isOpen && prevOpenRef.current) {
      setQuery("");
    }
  }, [isOpen]);


  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();

    const allResults: SearchResult[] = [];

    for (const product of products) {
      let matchField = "";

      // Search title
      if (product.title.toLowerCase().includes(q)) {
        matchField = "title";
      }
      // Search category
      else if (product.category.toLowerCase().includes(q)) {
        matchField = "category";
      }
      // Search description
      else if (product.description.toLowerCase().includes(q)) {
        matchField = "description";
      }
      // Search shade names
      else if (
        product.shades.some((s) => s.name.toLowerCase().includes(q))
      ) {
        matchField = "shade";
      }

      if (matchField) {
        // Determine href
        let href = "/shop";
        if (product.category === "lips") {
          href = "/product/lip-gloss";
        } else if (product.category === "eyes") {
          href = "/shop/eyes";
        } else if (product.category === "face") {
          href = "/shop/face";
        } else if (product.category === "skin-body") {
          href = "/shop/skin-body";
        }

        allResults.push({
          id: product.id,
          title: product.title,
          category: product.category,
          price: `${product.price}${product.currency}`,
          image: product.images[0],
          href,
          matchField,
        });
      }
    }

    return allResults;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Overlay panel */}
      <div className="relative mx-auto mt-24 w-full max-w-2xl px-4 sm:px-6">
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-2xl">
          {/* Search input */}
          <div className="flex items-center border-b border-stone-200 dark:border-stone-700 px-5 py-4">
            <svg
              className="h-5 w-5 text-stone-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 ml-3 bg-transparent text-stone-900 dark:text-stone-100 text-sm tracking-wide outline-none placeholder:text-stone-400"
            />
            <button
              type="button"
              onClick={onClose}
              className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors ml-3"
              aria-label="Close search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <div className="px-5 py-12 text-center">
                <p className="text-stone-400 text-sm font-light tracking-wide">
                  No products found.
                </p>
              </div>
            )}

            {results.length > 0 && (
              <div className="divide-y divide-stone-100 dark:divide-stone-800">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    onClick={onClose}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors group"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-14 h-16 shrink-0 overflow-hidden bg-stone-100 dark:bg-stone-800">
                      <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 dark:text-stone-100 tracking-wide truncate group-hover:underline">
                        {result.title}
                      </p>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light tracking-wide mt-0.5 capitalize">
                        {result.category}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-sm text-stone-600 dark:text-stone-300 font-light tracking-wide shrink-0">
                      {result.price}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!query.trim() && (
              <div className="px-5 py-12 text-center">
                <p className="text-stone-400 text-xs font-light tracking-wide">
                  Type to search products by name, category, or description.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
