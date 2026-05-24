import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";

const articles = [
  {
    title: "How to choose your everyday gloss shade",
    category: "Shade Guide",
    description: "A soft guide to pairing gloss colors with your natural lip tone, makeup style, and daily wardrobe.",
  },
  {
    title: "The quiet luxury of a polished lip",
    category: "Beauty Notes",
    description: "A coming article on shine, comfort, and the small details that make a gloss feel elevated.",
  },
  {
    title: "Building a gift-ready Mouna bundle",
    category: "Gifting",
    description: "Ideas for combining glosses and palettes into elegant gifts for birthdays, events, and self-care moments.",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Journal"
        title="Mouna Notes"
        description="Beauty articles are coming soon, with shade guidance, care rituals, and launch stories from Mouna Cosmetics."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.title} className="border border-stone-200 bg-stone-50 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-5">{article.category}</p>
                <h2 className="text-2xl font-light text-stone-900 mb-5 tracking-wide font-['var(--font-playfair)']">
                  {article.title}
                </h2>
                <p className="text-stone-600 leading-relaxed font-light tracking-wide mb-8">{article.description}</p>
                <span className="inline-block text-xs uppercase tracking-[0.25em] text-stone-500">
                  Coming Soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
