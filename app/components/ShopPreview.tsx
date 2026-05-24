import Image from "next/image";
import Link from "next/link";

const categoryImages = {
  lips: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.04.jpeg",
  eyes: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.11.jpeg",
  face: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.13.jpeg",
  skin: "/assets/mouna/WhatsApp Image 2026-05-23 at 11.53.14.jpeg",
};

export function ProductCard() {
  return (
    <Link
      href="/product/lip-gloss"
      className="group block border border-stone-200 bg-white p-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-5">
        <Image
          src={categoryImages.lips}
          alt="Mouna Lip Gloss"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="text-xs uppercase tracking-[0.24em] text-stone-500 mb-2">Lips</p>
      <h2 className="text-2xl font-light text-stone-900 tracking-wide font-['var(--font-playfair)'] mb-2">
        Mouna Lip Gloss
      </h2>
      <p className="text-sm font-light tracking-wide text-stone-600">Aura, Candy, Amour</p>
      <p className="mt-4 text-sm tracking-[0.18em] text-stone-900">125dh</p>
    </Link>
  );
}

export function CategoryGrid() {
  const categories = [
    { href: "/shop/lips", label: "Lips", image: categoryImages.lips, note: "Gloss shades and lip essentials." },
    { href: "/shop/eyes", label: "Eyes", image: categoryImages.eyes, note: "Palettes and future eye edits." },
    { href: "/shop/face", label: "Face", image: categoryImages.face, note: "Complexion launches coming soon." },
    { href: "/shop/skin-body", label: "Skin & Body", image: categoryImages.skin, note: "Care rituals planned for later." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.href}
          href={category.href}
          className="group block border border-stone-200 bg-white hover:shadow-xl transition-all duration-300"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
            <Image src={category.image} alt={category.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-light text-stone-900 tracking-wide font-['var(--font-playfair)'] mb-3">
              {category.label}
            </h2>
            <p className="text-sm font-light leading-relaxed tracking-wide text-stone-600">{category.note}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
