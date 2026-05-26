export type Product = {
  id: string;
  slug: string;
  category: "lips" | "eyes" | "face" | "skin-body";
  title: string;
  subtitle: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  benefits: string[];
  shades: { name: string; hex: string; description: string }[];
  featured: boolean;
  comingSoon: boolean;
};

export const products: Product[] = [
  {
    id: "aura-gloss",
    slug: "aura-gloss",
    category: "lips",
    title: "Aura Lip Gloss",
    subtitle: "Soft pink with a luminous finish",
    description:
      "Aura is a delicate soft-pink gloss that adds a natural, healthy glow to the lips. Lightweight and non-sticky, it glides on smoothly for a polished everyday look.",
    price: 149,
    currency: "dh",
    images: [
      "/assets/mouna/lips/aura1.jpeg",
      "/assets/mouna/lips/aura2.jpeg",
      "/assets/mouna/lips/aura3.jpeg",
      "/assets/mouna/lips/aura4.jpeg",
      "/assets/mouna/lips/aura5.jpeg",
      "/assets/mouna/lips/aura6.jpeg",
      "/assets/mouna/lips/aura7.jpeg",
      "/assets/mouna/lips/aura8.jpeg",
    ],
    benefits: [
      "High-shine finish without stickiness",
      "Enriched with shea butter for hydration",
      "Lightweight, comfortable wear",
      "Vegan and cruelty-free",
    ],
    shades: [
      { name: "Aura", hex: "#f0c4c4", description: "Soft pink — natural everyday glow" },
    ],
    featured: true,
    comingSoon: false,
  },
  {
    id: "candy-gloss",
    slug: "candy-gloss",
    category: "lips",
    title: "Candy Lip Gloss",
    subtitle: "Warm coral with a glossy sheen",
    description:
      "Candy is a warm coral gloss that brings a fresh, vibrant pop of colour. Its smooth texture and glossy sheen make it perfect for brightening any look.",
    price: 149,
    currency: "dh",
    images: [
      "/assets/mouna/lips/candy1.jpeg",
      "/assets/mouna/lips/candy3.jpeg",
      "/assets/mouna/lips/candy4.jpeg",
      "/assets/mouna/lips/candy5.jpeg",
      "/assets/mouna/lips/candy6.jpeg",
      "/assets/mouna/lips/candy7.jpeg",
      "/assets/mouna/lips/candy.jpeg",
      "/assets/mouna/lips/candy-amour.jpeg",
    ],
    benefits: [
      "Vibrant coral colour with glossy finish",
      "Smooth, non-sticky texture",
      "Hydrating formula with shea butter",
      "Vegan and cruelty-free",
    ],
    shades: [
      { name: "Candy", hex: "#e8a87c", description: "Warm coral — fresh and vibrant" },
    ],
    featured: true,
    comingSoon: false,
  },
  {
    id: "amour-gloss",
    slug: "amour-gloss",
    category: "lips",
    title: "Amour Lip Gloss",
    subtitle: "Deep berry with a rich shimmer",
    description:
      "Amour is a deep berry gloss with a subtle shimmer that catches the light beautifully. Rich in colour and comfortable on the lips, it is made for evening elegance.",
    price: 149,
    currency: "dh",
    images: [
      "/assets/mouna/lips/amour1.jpeg",
      "/assets/mouna/lips/amour2.jpeg",
      "/assets/mouna/lips/amour4.jpeg",
      "/assets/mouna/lips/amour5.jpeg",
      "/assets/mouna/lips/amour6.jpeg",
      "/assets/mouna/lips/amour7.jpeg",
    ],
    benefits: [
      "Deep berry shade with subtle shimmer",
      "Rich colour payoff in one swipe",
      "Comfortable, non-drying wear",
      "Vegan and cruelty-free",
    ],
    shades: [
      { name: "Amour", hex: "#8b3a5a", description: "Deep berry — rich and elegant" },
    ],
    featured: true,
    comingSoon: false,
  },
  {
    id: "nude-palette",
    slug: "nude-palette",
    category: "eyes",
    title: "Nude Eyeshadow Palette",
    subtitle: "Everyday neutrals for a soft eye look",
    description:
      "A curated palette of nude and warm-toned eyeshadows designed for effortless everyday looks. From soft mattes to subtle shimmers, each shade blends seamlessly.",
    price: 249,
    currency: "dh",
    images: [
      "/assets/mouna/eyes/WhatsApp Image 2026-05-23 at 11.53.13 (1).jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-23 at 11.53.14 (2).jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-23 at 11.53.14.jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-24 at 22.30.07.jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-24 at 22.34.50.jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.26.29.jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.26.30.jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.27.00 (1).jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.27.00.jpeg",
      "/assets/mouna/eyes/WhatsApp Image 2026-05-25 at 22.27.01.jpeg",
    ],

    benefits: [
      "Curated neutral shades for daily wear",
      "Blendable matte and shimmer finishes",
      "Compact, travel-friendly packaging",
      "Vegan and cruelty-free",
    ],
    shades: [
      { name: "Shell", hex: "#f5e6d3", description: "Soft cream — base or highlight" },
      { name: "Sand", hex: "#d4c4a8", description: "Warm beige — transition shade" },
      { name: "Taupe", hex: "#a89880", description: "Soft brown — crease definition" },
      { name: "Bronze", hex: "#b8865a", description: "Warm bronze — lid shimmer" },
    ],
    featured: false,
    comingSoon: true,
  },
];
