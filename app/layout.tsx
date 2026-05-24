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

export const metadata: Metadata = {
  title: "Mouna Cosmetics | Timeless Beauty. Modern Luxury.",
  description: "Luxury cosmetics for the modern individual. Clean, luxurious beauty products crafted with quality ingredients.",
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
