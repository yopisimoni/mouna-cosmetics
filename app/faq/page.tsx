import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Orders are currently handled through WhatsApp. Share the product name, quantity, and delivery city, and the team will confirm availability and next steps.",
  },
  {
    question: "Where do you deliver?",
    answer: "Delivery details are confirmed by message based on your city and current availability. Free shipping may apply to qualifying orders as shown on the product section.",
  },
  {
    question: "What payment methods are available?",
    answer: "Payment options are confirmed during the WhatsApp order conversation so you can choose the most convenient available method.",
  },
  {
    question: "Can I return a product?",
    answer: "For hygiene reasons, opened cosmetics may not be eligible for return. If your order arrives damaged or incorrect, contact Mouna Cosmetics as soon as possible with photos and order details.",
  },
  {
    question: "What ingredients are in the products?",
    answer: "Mouna glosses are presented as clean-feeling formulas with nourishing ingredients such as shea butter. Always review the product packaging and ask before ordering if you have allergies or sensitivities.",
  },
  {
    question: "How do I choose a gloss color?",
    answer: "For a natural look, choose a shade close to your lip tone. For more glow, choose a warmer or brighter shade. You can also send a photo or describe your usual makeup style for help.",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Helpful answers before you order"
        description="A simple guide to ordering, delivery, payment, returns, ingredients, and choosing the gloss shade that fits your style."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="border border-stone-200 bg-stone-50 p-6 sm:p-8">
              <h2 className="text-stone-900 text-xl font-light mb-4 tracking-wide">{faq.question}</h2>
              <p className="text-stone-600 leading-relaxed font-light tracking-wide">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
