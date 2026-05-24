export const socialLinks = {
  instagram: "https://www.instagram.com/mouna_cosmetics?igsh=MWE1ejlmYmZvbnA0Yw==",
  tiktok: "https://www.tiktok.com/@mounacosmetics?_r=1&_t=ZS-96cvaL1Ti5P",
  whatsapp: "https://wa.me/212618014756?text=Hello%20Mouna%20Cosmetics%2C%20I%20would%20like%20to%20order.",
};

export function getWhatsappOrderLink(productName?: string) {
  const message = productName
    ? `Hello Mouna Cosmetics, I would like to order ${productName}.`
    : "Hello Mouna Cosmetics, I would like to order.";

  return `https://wa.me/212618014756?text=${encodeURIComponent(message)}`;
}

export function getWhatsappMessageLink(message: string) {
  return `https://wa.me/212618014756?text=${encodeURIComponent(message)}`;
}

export const mainNavLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop/lips", label: "Lips" },
  { href: "/shop/eyes", label: "Eyes" },
  { href: "/shop/face", label: "Face" },
  { href: "/shop/skin-body", label: "Skin & Body" },
  { href: "/coming-soon", label: "More" },
] as const;

export const footerLinks = [
  { href: "/shop", key: "products" },
  { href: "/shop/lips", label: "Lips" },
  { href: "/about", key: "ourStory" },
  { href: "/coming-soon", key: "comingSoon" },
  { href: "/blog", key: "blog" },
  { href: "/faq", key: "faq" },
  { href: "/privacy-policy", key: "privacyPolicy" },
  { href: "/terms-of-use", key: "termsOfUse" },
] as const;
