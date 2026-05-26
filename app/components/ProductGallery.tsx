"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/5] bg-stone-100 flex items-center justify-center">
        <span className="text-stone-400 text-xs uppercase tracking-[0.2em]">No image</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main preview */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 group">
        <Image
          src={images[selectedIndex]}
          alt={`${productName} — view ${selectedIndex + 1}`}
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority={selectedIndex === 0}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={src}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-16 h-20 flex-shrink-0 overflow-hidden border-2 transition-all duration-300 ${
                index === selectedIndex
                  ? "border-stone-900 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
