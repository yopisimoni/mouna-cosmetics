import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { socialLinks } from "../components/site-data";

const contactLinks = [
  { label: "Instagram", href: socialLinks.instagram, note: "Follow launches, shade looks, and brand updates." },
  { label: "TikTok", href: socialLinks.tiktok, note: "Watch gloss swatches, routines, and quick product moments." },
  { label: "WhatsApp", href: socialLinks.whatsapp, note: "Ask about availability, delivery, and placing an order." },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Speak with Mouna"
        description="For orders, shade help, delivery questions, or collaboration notes, reach out through the channels below."
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-stone-200 bg-stone-50 p-8 hover:border-stone-900 hover:bg-white transition-all duration-300"
              >
                <h2 className="text-stone-900 text-xl font-light mb-4 tracking-[0.12em] font-['var(--font-playfair)']">
                  {link.label}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed font-light tracking-wide">{link.note}</p>
              </a>
            ))}
          </div>
          <div className="bg-stone-900 text-white p-8 sm:p-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-300 mb-5">Simple Contact</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-[0.12em] font-['var(--font-playfair)']">
              Need help choosing?
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto mb-8">
              Send a message with your preferred finish, skin tone, and whether you want a soft everyday shade or a more noticeable glossy look.
            </p>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-stone-900 text-sm tracking-[0.25em] hover:bg-stone-100 transition-all duration-300"
            >
              CONTACT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
