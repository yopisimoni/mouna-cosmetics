type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-stone-50 py-20 sm:py-28 border-b border-stone-200/70">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-stone-500 mb-6">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone-900 mb-8 tracking-[0.12em] font-['var(--font-playfair)'] leading-tight">
          {title}
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
