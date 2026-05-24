import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <div className="flex flex-col">
                <h1 className="text-2xl font-light tracking-[0.25em] text-stone-900 font-['var(--font-playfair)'] leading-none">MOUNA</h1>
                <span className="text-[0.6rem] tracking-[0.4em] text-stone-500 mt-1 uppercase">Cosmetics</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#story" className="text-stone-600 hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.15em] font-light">Story</a>
              <a href="#products" className="text-stone-600 hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.15em] font-light">Products</a>
              <a href="#gallery" className="text-stone-600 hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.15em] font-light">Gallery</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-all duration-300 text-sm tracking-[0.15em] font-light">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-stone-600 hover:text-stone-900 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80"
            alt="Luxury Beauty"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/20 via-stone-900/30 to-stone-900/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-8 tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] font-['var(--font-playfair)'] leading-tight">
            MOUNA COSMETICS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-100 mb-12 font-light tracking-[0.15em] opacity-95">
            Timeless Beauty. Modern Luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-stone-900 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] hover:bg-stone-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              SHOP SOON
            </button>
            <button className="px-8 sm:px-10 py-3 sm:py-4 border border-white/60 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm">
              CONTACT ON INSTAGRAM
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-12 tracking-[0.15em] font-['var(--font-playfair)']">Our Story</h2>
          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed mb-8 font-light tracking-wide">
            Mouna Cosmetics was born from a passion for clean, luxurious beauty. We believe that true luxury lies in simplicity, quality ingredients, and the confidence that comes from caring for yourself.
          </p>
          <p className="text-stone-600 text-lg sm:text-xl leading-relaxed font-light tracking-wide">
            Each product is carefully crafted to deliver exceptional results while honoring your skin&apos;s natural beauty. Our commitment to excellence ensures that every experience with Mouna is nothing short of extraordinary.
          </p>
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section id="products" className="py-24 sm:py-36 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-200 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-stone-300/50 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <h3 className="text-stone-900 font-light mb-2 tracking-wide text-lg">Coming Soon</h3>
                <p className="text-stone-500 text-sm font-light tracking-wide">Luxury skincare collection</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery Placeholder */}
      <section id="gallery" className="py-24 sm:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-16 text-center tracking-[0.15em] font-['var(--font-playfair)']">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-150 to-stone-250 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-150 to-stone-250 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 sm:py-36 bg-stone-900 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-8 tracking-[0.15em] font-['var(--font-playfair)']">Get in Touch</h2>
          <p className="text-stone-300 text-lg sm:text-xl mb-12 font-light tracking-wide">
            Follow our journey on Instagram or reach out via WhatsApp for inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-stone-900 text-sm tracking-[0.25em] hover:bg-stone-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              FOLLOW ON INSTAGRAM
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/60 text-white text-sm tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              CONTACT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white text-2xl font-light mb-6 tracking-[0.2em] font-['var(--font-playfair)']">MOUNA</h3>
              <p className="text-sm font-light tracking-wide leading-relaxed">Luxury cosmetics for the modern individual.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-light mb-6 tracking-[0.15em]">Quick Links</h3>
              <ul className="space-y-3 text-sm font-light tracking-wide">
                <li><a href="#story" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                <li><a href="#products" className="hover:text-white transition-colors duration-300">Products</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors duration-300">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-light mb-6 tracking-[0.15em]">Connect</h3>
              <ul className="space-y-3 text-sm font-light tracking-wide">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm font-light tracking-wide">
            <p>&copy; 2026 Mouna Cosmetics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
