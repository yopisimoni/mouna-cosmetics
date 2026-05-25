import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "./components/i18n";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// TODO: Replace with real domain when custom domain is set up
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mouna-cosmetics.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mouna Cosmetics | Timeless Beauty. Modern Luxury.",
    template: "%s | Mouna Cosmetics",
  },
  description:
    "Luxury cosmetics for the modern individual. Discover high-shine lip glosses, curated beauty bundles, and clean formulas crafted with quality ingredients.",
  keywords: [
    "Mouna Cosmetics",
    "lip gloss",
    "luxury cosmetics",
    "clean beauty",
    "Morocco cosmetics",
    "high-shine gloss",
    "vegan lip gloss",
    "beauty bundles",
  ],
  authors: [{ name: "Mouna Cosmetics" }],
  creator: "Mouna Cosmetics",
  publisher: "Mouna Cosmetics",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_AR", "es_ES"],
    siteName: "Mouna Cosmetics",
    title: "Mouna Cosmetics | Timeless Beauty. Modern Luxury.",
    description:
      "Luxury cosmetics for the modern individual. Discover high-shine lip glosses, curated beauty bundles, and clean formulas.",
    url: siteUrl,
    images: [
      {
        url: "/assets/mouna/WhatsApp%20Image%202026-05-23%20at%2011.53.13%20(1).jpeg",
        width: 1200,
        height: 630,
        alt: "Mouna Cosmetics — Timeless Beauty. Modern Luxury.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouna Cosmetics | Timeless Beauty. Modern Luxury.",
    description:
      "Luxury cosmetics for the modern individual. Discover high-shine lip glosses, curated beauty bundles, and clean formulas.",
    images: [
      "/assets/mouna/WhatsApp%20Image%202026-05-23%20at%2011.53.13%20(1).jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="mouna-preferences" strategy="beforeInteractive">
          {`try{var l=localStorage.getItem('mouna-language')||'en';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';document.documentElement.classList.toggle('dark',localStorage.getItem('mouna-theme')==='dark')}catch(e){}`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
