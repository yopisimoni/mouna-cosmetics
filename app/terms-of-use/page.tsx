import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";

const sections = [
  {
    title: "Using this website",
    text: "This website is provided to introduce Mouna Cosmetics, show product information, and direct visitors to social or WhatsApp contact channels.",
  },
  {
    title: "Product information",
    text: "Product names, prices, availability, and bundle offers may change. Final details should be confirmed directly before placing an order.",
  },
  {
    title: "Orders and communication",
    text: "Orders are not processed through checkout on this website. Any purchase discussion, payment detail, delivery arrangement, or support request happens through the listed contact channels.",
  },
  {
    title: "Placeholder notice",
    text: "These terms are a basic placeholder for a small cosmetics website and should be reviewed by a qualified professional before being treated as final legal terms.",
  },
];

export default function TermsOfUsePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Terms of Use"
        title="Simple site terms"
        description="A basic overview of how visitors may use this website and how product information should be understood."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="border-b border-stone-200 pb-8">
              <h2 className="text-stone-900 text-2xl font-light mb-4 tracking-wide font-['var(--font-playfair)']">
                {section.title}
              </h2>
              <p className="text-stone-600 leading-relaxed font-light tracking-wide">{section.text}</p>
            </section>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
