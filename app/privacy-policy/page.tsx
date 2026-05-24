import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";

const sections = [
  {
    title: "Information we may collect",
    text: "When you contact Mouna Cosmetics through social platforms or WhatsApp, you may share your name, contact details, delivery city, order preferences, and messages needed to respond to your request.",
  },
  {
    title: "How information is used",
    text: "Information is used to answer questions, confirm orders, arrange delivery, provide customer support, and share relevant product updates when appropriate.",
  },
  {
    title: "Sharing and storage",
    text: "Mouna Cosmetics does not sell customer information. Details may be shared only when necessary to complete an order, such as delivery coordination or required customer service follow-up.",
  },
  {
    title: "Placeholder notice",
    text: "This privacy policy is a basic placeholder for a small cosmetics website and should be reviewed by a qualified professional before being treated as final legal advice.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy at Mouna Cosmetics"
        description="A simple overview of how customer information may be handled when you contact or order from Mouna Cosmetics."
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
