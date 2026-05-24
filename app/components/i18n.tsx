"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export const languages = [
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "fr", label: "French", shortLabel: "FR", dir: "ltr" },
  { code: "ar", label: "Arabic", shortLabel: "AR", dir: "rtl" },
  { code: "es", label: "Spanish", shortLabel: "ES", dir: "ltr" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];
type Direction = (typeof languages)[number]["dir"];

const fallbackLanguage: LanguageCode = "en";

function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return fallbackLanguage;
  }

  const storedLanguage = window.localStorage.getItem("mouna-language");
  return isLanguageCode(storedLanguage) ? storedLanguage : fallbackLanguage;
}

function subscribeToLanguageChange(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("mouna-language-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("mouna-language-change", callback);
  };
}

function getLanguageServerSnapshot(): LanguageCode {
  return fallbackLanguage;
}

export const dictionaries = {
  en: {
    common: {
      brand: "MOUNA",
      brandFull: "MOUNA COSMETICS",
      cosmetics: "Cosmetics",
      instagram: "Instagram",
      tiktok: "TikTok",
      whatsapp: "WhatsApp",
      language: "Language",
      light: "Light",
      dark: "Dark",
      quickLinks: "Quick Links",
      connect: "Connect",
      footerTagline: "Luxury cosmetics for the modern individual.",
      rights: "All rights reserved.",
    },
    nav: {
      home: "Home",
      about: "About",
      launches: "Launches",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      ourStory: "Our Story",
      products: "Products",
      comingSoon: "Coming Soon",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
    },
    home: {
      heroSubtitle: "Timeless Beauty. Modern Luxury.",
      shopSoon: "SHOP SOON",
      contactInstagram: "CONTACT ON INSTAGRAM",
      storyTitle: "Our Story",
      storyOne: "Mouna Cosmetics was born from a passion for clean, luxurious beauty. We believe that true luxury lies in simplicity, quality ingredients, and the confidence that comes from caring for yourself.",
      storyTwo: "Each product is carefully crafted to deliver exceptional results while honoring your skin's natural beauty. Our commitment to excellence ensures that every experience with Mouna is nothing short of extraordinary.",
      featuredProducts: "Featured Products",
      orderWhatsapp: "ORDER VIA WHATSAPP",
      bundleTitle: "Bundle & Save",
      save: "Save",
      freeShipping: "Free Shipping",
      freeShippingNote: "On orders from 395dh",
      whyTitle: "Why Mouna?",
      benefitOneTitle: "High-Shine Finish",
      benefitOneText: "Glossy finish without the sticky feeling",
      benefitTwoTitle: "Shea Butter Enriched",
      benefitTwoText: "Nourishes and hydrates your lips",
      benefitThreeTitle: "Clean Formula",
      benefitThreeText: "Vegan, cruelty-free, gluten-free & paraben-free",
      gallery: "Gallery",
      contactTitle: "Get in Touch",
      contactText: "Follow our journey on Instagram and TikTok, or reach out via WhatsApp for inquiries.",
      followInstagram: "FOLLOW ON INSTAGRAM",
      followTiktok: "FOLLOW ON TIKTOK",
      contactWhatsapp: "CONTACT ON WHATSAPP",
    },
    about: {
      eyebrow: "Our Story",
      title: "Beauty with a soft signature",
      description: "Mouna Cosmetics creates polished lip gloss essentials for everyday confidence, special moments, and the quiet ritual of taking care of yourself.",
      bodyOne: "The brand is built around luminous finishes, comfortable textures, and shades that feel easy to wear. Each detail is chosen to make beauty feel refined without being complicated.",
      bodyTwo: "From soft everyday gloss to gift-ready bundles, Mouna Cosmetics focuses on products that look elegant on the vanity and effortless on the lips.",
      values: ["High-shine", "Clean feel", "Gift ready"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Speak with Mouna",
      description: "For orders, shade help, delivery questions, or collaboration notes, reach out through the channels below.",
      instagramNote: "Follow launches, shade looks, and brand updates.",
      tiktokNote: "Watch gloss swatches, routines, and quick product moments.",
      whatsappNote: "Ask about availability, delivery, and placing an order.",
      simple: "Simple Contact",
      helpTitle: "Need help choosing?",
      helpText: "Send a message with your preferred finish, skin tone, and whether you want a soft everyday shade or a more noticeable glossy look.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Helpful answers before you order",
      description: "A simple guide to ordering, delivery, payment, returns, ingredients, and choosing the gloss shade that fits your style.",
      items: [
        ["How do I place an order?", "Orders are currently handled through WhatsApp. Share the product name, quantity, and delivery city, and the team will confirm availability and next steps."],
        ["Where do you deliver?", "Delivery details are confirmed by message based on your city and current availability. Free shipping may apply to qualifying orders as shown on the product section."],
        ["What payment methods are available?", "Payment options are confirmed during the WhatsApp order conversation so you can choose the most convenient available method."],
        ["Can I return a product?", "For hygiene reasons, opened cosmetics may not be eligible for return. If your order arrives damaged or incorrect, contact Mouna Cosmetics as soon as possible with photos and order details."],
        ["What ingredients are in the products?", "Mouna glosses are presented as clean-feeling formulas with nourishing ingredients such as shea butter. Always review the product packaging and ask before ordering if you have allergies or sensitivities."],
        ["How do I choose a gloss color?", "For a natural look, choose a shade close to your lip tone. For more glow, choose a warmer or brighter shade. You can also send a photo or describe your usual makeup style for help."],
      ],
    },
    blog: {
      eyebrow: "Journal",
      title: "Mouna Notes",
      description: "Beauty articles are coming soon, with shade guidance, care rituals, and launch stories from Mouna Cosmetics.",
      comingSoon: "Coming Soon",
      articles: [
        ["Shade Guide", "How to choose your everyday gloss shade", "A soft guide to pairing gloss colors with your natural lip tone, makeup style, and daily wardrobe."],
        ["Beauty Notes", "The quiet luxury of a polished lip", "A coming article on shine, comfort, and the small details that make a gloss feel elevated."],
        ["Gifting", "Building a gift-ready Mouna bundle", "Ideas for combining glosses and palettes into elegant gifts for birthdays, events, and self-care moments."],
      ],
    },
    launches: {
      eyebrow: "Coming Soon",
      title: "Next from Mouna",
      description: "Upcoming products and launches are being prepared with the same soft shine, refined finish, and giftable presentation.",
      watch: "WATCH LAUNCH UPDATES",
      items: [
        ["New Gloss Shades", "Soft shine shades designed for everyday wear and evening glow."],
        ["Curated Lip Sets", "Bundle-ready gloss pairings for gifting, travel, and self-care routines."],
        ["Beauty Palette Restock", "A polished palette moment to pair with your favorite Mouna gloss."],
      ],
    },
    privacy: {
      eyebrow: "Privacy Policy",
      title: "Privacy at Mouna Cosmetics",
      description: "A simple overview of how customer information may be handled when you contact or order from Mouna Cosmetics.",
      sections: [
        ["Information we may collect", "When you contact Mouna Cosmetics through social platforms or WhatsApp, you may share your name, contact details, delivery city, order preferences, and messages needed to respond to your request."],
        ["How information is used", "Information is used to answer questions, confirm orders, arrange delivery, provide customer support, and share relevant product updates when appropriate."],
        ["Sharing and storage", "Mouna Cosmetics does not sell customer information. Details may be shared only when necessary to complete an order, such as delivery coordination or required customer service follow-up."],
        ["Placeholder notice", "This privacy policy is a basic placeholder for a small cosmetics website and should be reviewed by a qualified professional before being treated as final legal advice."],
      ],
    },
    terms: {
      eyebrow: "Terms of Use",
      title: "Simple site terms",
      description: "A basic overview of how visitors may use this website and how product information should be understood.",
      sections: [
        ["Using this website", "This website is provided to introduce Mouna Cosmetics, show product information, and direct visitors to social or WhatsApp contact channels."],
        ["Product information", "Product names, prices, availability, and bundle offers may change. Final details should be confirmed directly before placing an order."],
        ["Orders and communication", "Orders are not processed through checkout on this website. Any purchase discussion, payment detail, delivery arrangement, or support request happens through the listed contact channels."],
        ["Placeholder notice", "These terms are a basic placeholder for a small cosmetics website and should be reviewed by a qualified professional before being treated as final legal terms."],
      ],
    },
  },
  fr: {
    common: {
      brand: "MOUNA",
      brandFull: "MOUNA COSMETICS",
      cosmetics: "Cosmétiques",
      instagram: "Instagram",
      tiktok: "TikTok",
      whatsapp: "WhatsApp",
      language: "Langue",
      light: "Clair",
      dark: "Sombre",
      quickLinks: "Liens rapides",
      connect: "Contact",
      footerTagline: "Cosmétiques luxueux pour une beauté moderne.",
      rights: "Tous droits réservés.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      launches: "Lancements",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      ourStory: "Notre histoire",
      products: "Produits",
      comingSoon: "Bientôt",
      privacyPolicy: "Confidentialité",
      termsOfUse: "Conditions",
    },
    home: {
      heroSubtitle: "Beauté intemporelle. Luxe moderne.",
      shopSoon: "BIENTÔT",
      contactInstagram: "CONTACTER SUR INSTAGRAM",
      storyTitle: "Notre histoire",
      storyOne: "Mouna Cosmetics est née d'une passion pour une beauté propre et luxueuse. Le vrai luxe se trouve dans la simplicité, les ingrédients de qualité et la confiance.",
      storyTwo: "Chaque produit est pensé pour sublimer la beauté naturelle avec une expérience douce, soignée et élégante.",
      featuredProducts: "Produits phares",
      orderWhatsapp: "COMMANDER SUR WHATSAPP",
      bundleTitle: "Packs & économies",
      save: "Économisez",
      freeShipping: "Livraison offerte",
      freeShippingNote: "Sur les commandes dès 395dh",
      whyTitle: "Pourquoi Mouna ?",
      benefitOneTitle: "Fini brillant",
      benefitOneText: "Un effet glossy sans sensation collante",
      benefitTwoTitle: "Enrichi au beurre de karité",
      benefitTwoText: "Nourrit et hydrate les lèvres",
      benefitThreeTitle: "Formule clean",
      benefitThreeText: "Vegan, cruelty-free, sans gluten et sans parabènes",
      gallery: "Galerie",
      contactTitle: "Contactez-nous",
      contactText: "Suivez-nous sur Instagram et TikTok, ou écrivez-nous sur WhatsApp.",
      followInstagram: "SUIVRE SUR INSTAGRAM",
      followTiktok: "SUIVRE SUR TIKTOK",
      contactWhatsapp: "CONTACTER SUR WHATSAPP",
    },
    about: {
      eyebrow: "Notre histoire",
      title: "Une beauté à la signature douce",
      description: "Mouna Cosmetics crée des gloss élégants pour la confiance du quotidien, les moments spéciaux et les rituels de soin.",
      bodyOne: "La marque mise sur des finis lumineux, des textures confortables et des teintes faciles à porter.",
      bodyTwo: "Des gloss délicats aux packs cadeaux, Mouna Cosmetics privilégie l'élégance simple et le plaisir d'utilisation.",
      values: ["Brillance", "Sensation clean", "Prêt à offrir"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Échanger avec Mouna",
      description: "Pour commander, choisir une teinte, poser une question livraison ou proposer une collaboration, utilisez les liens ci-dessous.",
      instagramNote: "Suivez les lancements, looks et nouveautés.",
      tiktokNote: "Découvrez les swatches, routines et moments produits.",
      whatsappNote: "Demandez la disponibilité, la livraison et la commande.",
      simple: "Contact simple",
      helpTitle: "Besoin d'aide pour choisir ?",
      helpText: "Envoyez votre fini préféré, votre carnation et le style recherché : naturel ou plus glossy.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Réponses utiles avant de commander",
      description: "Un guide simple sur la commande, la livraison, le paiement, les retours, les ingrédients et le choix des couleurs.",
      items: [
        ["Comment passer commande ?", "Les commandes se font actuellement via WhatsApp. Envoyez le produit, la quantité et votre ville pour confirmer les détails."],
        ["Où livrez-vous ?", "La livraison est confirmée par message selon votre ville et la disponibilité. La livraison offerte peut s'appliquer selon le montant."],
        ["Quels moyens de paiement sont disponibles ?", "Les options de paiement sont confirmées pendant l'échange WhatsApp."],
        ["Puis-je retourner un produit ?", "Pour des raisons d'hygiène, les cosmétiques ouverts peuvent ne pas être repris. Contactez-nous vite si la commande arrive abîmée ou incorrecte."],
        ["Quels sont les ingrédients ?", "Les gloss Mouna sont présentés comme des formules clean avec des ingrédients nourrissants comme le beurre de karité. Vérifiez l'emballage si vous avez des sensibilités."],
        ["Comment choisir une couleur de gloss ?", "Pour un rendu naturel, choisissez une teinte proche de vos lèvres. Pour plus d'éclat, optez pour une teinte plus chaude ou lumineuse."],
      ],
    },
    blog: {
      eyebrow: "Journal",
      title: "Notes Mouna",
      description: "Des articles beauté arrivent bientôt avec conseils de teintes, rituels et histoires de lancement.",
      comingSoon: "Bientôt",
      articles: [
        ["Guide teintes", "Choisir son gloss du quotidien", "Un guide doux pour associer les couleurs à vos lèvres, votre maquillage et votre style."],
        ["Notes beauté", "Le luxe discret d'une lèvre glossy", "Un article à venir sur la brillance, le confort et les détails qui font la différence."],
        ["Cadeaux", "Composer un pack Mouna", "Des idées pour créer des cadeaux élégants avec gloss et palettes."],
      ],
    },
    launches: {
      eyebrow: "Bientôt",
      title: "Les prochaines nouveautés Mouna",
      description: "De nouveaux produits se préparent avec la même brillance douce, finition raffinée et présentation élégante.",
      watch: "VOIR LES LANCEMENTS",
      items: [
        ["Nouvelles teintes de gloss", "Des teintes brillantes pour le quotidien et les soirées."],
        ["Sets lèvres", "Des associations de gloss pensées pour offrir ou voyager."],
        ["Retour de la palette beauté", "Une palette élégante à associer avec votre gloss Mouna favori."],
      ],
    },
    privacy: {
      eyebrow: "Confidentialité",
      title: "Confidentialité chez Mouna Cosmetics",
      description: "Un aperçu simple de l'utilisation des informations lorsque vous contactez ou commandez.",
      sections: [
        ["Informations collectées", "Lorsque vous contactez Mouna Cosmetics, vous pouvez partager votre nom, vos coordonnées, votre ville et vos préférences de commande."],
        ["Utilisation", "Ces informations servent à répondre, confirmer les commandes, organiser la livraison et assurer le support."],
        ["Partage et stockage", "Mouna Cosmetics ne vend pas les informations clients. Elles peuvent être partagées uniquement si nécessaire pour finaliser une commande."],
        ["Note provisoire", "Cette politique est un texte de base et doit être relue par un professionnel avant d'être considérée comme définitive."],
      ],
    },
    terms: {
      eyebrow: "Conditions",
      title: "Conditions simples du site",
      description: "Un aperçu de l'utilisation du site et de la compréhension des informations produits.",
      sections: [
        ["Utilisation du site", "Ce site présente Mouna Cosmetics, les produits et les canaux de contact."],
        ["Informations produits", "Les noms, prix, disponibilités et offres peuvent changer. Confirmez les détails avant commande."],
        ["Commandes et communication", "Aucun paiement n'est traité sur ce site. Les échanges se font via les canaux indiqués."],
        ["Note provisoire", "Ces conditions sont un texte de base et doivent être relues par un professionnel avant d'être définitives."],
      ],
    },
  },
  ar: {
    common: {
      brand: "MOUNA",
      brandFull: "MOUNA COSMETICS",
      cosmetics: "مستحضرات التجميل",
      instagram: "إنستغرام",
      tiktok: "تيك توك",
      whatsapp: "واتساب",
      language: "اللغة",
      light: "فاتح",
      dark: "داكن",
      quickLinks: "روابط سريعة",
      connect: "تواصل",
      footerTagline: "مستحضرات تجميل فاخرة لجمال عصري.",
      rights: "كل الحقوق محفوظة.",
    },
    nav: {
      home: "الرئيسية",
      about: "عنّا",
      launches: "الإطلاقات",
      blog: "المدونة",
      faq: "الأسئلة",
      contact: "تواصل",
      ourStory: "قصتنا",
      products: "المنتجات",
      comingSoon: "قريباً",
      privacyPolicy: "الخصوصية",
      termsOfUse: "الشروط",
    },
    home: {
      heroSubtitle: "جمال خالد. فخامة عصرية.",
      shopSoon: "قريباً",
      contactInstagram: "تواصل عبر إنستغرام",
      storyTitle: "قصتنا",
      storyOne: "وُلدت Mouna Cosmetics من شغف بالجمال النظيف والفخم، حيث تلتقي البساطة بالمكونات الجيدة والثقة اليومية.",
      storyTwo: "كل منتج مصمم بعناية ليبرز جمالك الطبيعي ويمنحك تجربة راقية وناعمة.",
      featuredProducts: "منتجات مميزة",
      orderWhatsapp: "اطلبي عبر واتساب",
      bundleTitle: "العروض والتوفير",
      save: "وفري",
      freeShipping: "توصيل مجاني",
      freeShippingNote: "للطلبات ابتداءً من 395dh",
      whyTitle: "لماذا مونا؟",
      benefitOneTitle: "لمعة عالية",
      benefitOneText: "لمسة لامعة بدون إحساس لزج",
      benefitTwoTitle: "غني بزبدة الشيا",
      benefitTwoText: "يرطب ويغذي الشفاه",
      benefitThreeTitle: "تركيبة نظيفة",
      benefitThreeText: "نباتي، بدون قسوة، بدون غلوتين وبدون بارابين",
      gallery: "المعرض",
      contactTitle: "تواصلي معنا",
      contactText: "تابعينا على إنستغرام وتيك توك، أو راسلينا عبر واتساب.",
      followInstagram: "تابعينا على إنستغرام",
      followTiktok: "تابعينا على تيك توك",
      contactWhatsapp: "تواصلي عبر واتساب",
    },
    about: {
      eyebrow: "قصتنا",
      title: "جمال بتوقيع ناعم",
      description: "تقدم Mouna Cosmetics أساسيات gloss أنيقة للثقة اليومية والمناسبات ولحظات العناية.",
      bodyOne: "تعتمد العلامة على اللمعان الناعم، القوام المريح، والألوان السهلة في الاستخدام.",
      bodyTwo: "من gloss يومي إلى مجموعات هدايا، تهتم Mouna Cosmetics بالتفاصيل الراقية والبسيطة.",
      values: ["لمعة عالية", "إحساس نظيف", "جاهز للإهداء"],
    },
    contact: {
      eyebrow: "تواصل",
      title: "تواصلي مع مونا",
      description: "للطلبات، اختيار الألوان، أسئلة التوصيل أو التعاون، استخدمي الروابط التالية.",
      instagramNote: "تابعي الإطلاقات، الإطلالات، وأخبار العلامة.",
      tiktokNote: "شاهدي السواتشات والروتينات ولحظات المنتجات.",
      whatsappNote: "اسألي عن التوفر والتوصيل وطريقة الطلب.",
      simple: "تواصل بسيط",
      helpTitle: "تحتاجين مساعدة في الاختيار؟",
      helpText: "ارسلي نوع اللمسة المفضلة، لون بشرتك، وهل تريدين لوناً ناعماً أو لمعة أوضح.",
    },
    faq: {
      eyebrow: "الأسئلة",
      title: "إجابات مفيدة قبل الطلب",
      description: "دليل بسيط حول الطلب، التوصيل، الدفع، الإرجاع، المكونات واختيار ألوان gloss.",
      items: [
        ["كيف أطلب؟", "حالياً تتم الطلبات عبر واتساب. أرسلي اسم المنتج، الكمية والمدينة لتأكيد التفاصيل."],
        ["أين يتم التوصيل؟", "يتم تأكيد التوصيل حسب المدينة والتوفر. قد يطبق التوصيل المجاني حسب قيمة الطلب."],
        ["ما طرق الدفع؟", "يتم تأكيد خيارات الدفع خلال محادثة واتساب."],
        ["هل يمكن الإرجاع؟", "لأسباب صحية، قد لا تقبل مستحضرات التجميل المفتوحة. تواصلي بسرعة إذا وصل الطلب متضرراً أو غير صحيح."],
        ["ما مكونات المنتجات؟", "تقدم gloss مونا كتركيبات نظيفة مع مكونات مغذية مثل زبدة الشيا. راجعي العبوة إذا لديك حساسية."],
        ["كيف أختار لون gloss؟", "لإطلالة طبيعية اختاري لوناً قريباً من لون الشفاه. للمعة أوضح اختاري لوناً أدفأ أو أكثر إشراقاً."],
      ],
    },
    blog: {
      eyebrow: "المدونة",
      title: "ملاحظات مونا",
      description: "مقالات الجمال قادمة قريباً مع نصائح للألوان، روتينات وقصص الإطلاق.",
      comingSoon: "قريباً",
      articles: [
        ["دليل الألوان", "اختيار gloss يومي", "دليل بسيط لتنسيق الألوان مع لون الشفاه والمكياج والأسلوب اليومي."],
        ["ملاحظات جمال", "الفخامة الهادئة للشفاه اللامعة", "مقال قادم عن اللمعان والراحة والتفاصيل الراقية."],
        ["هدايا", "تجهيز مجموعة مونا", "أفكار لجمع gloss والباليت في هدايا أنيقة."],
      ],
    },
    launches: {
      eyebrow: "قريباً",
      title: "الجديد القادم من مونا",
      description: "منتجات وإطلاقات قادمة بنفس اللمعان الناعم والتقديم الراقي.",
      watch: "شاهدي أخبار الإطلاق",
      items: [
        ["ألوان gloss جديدة", "ألوان لامعة للاستخدام اليومي والمساء."],
        ["مجموعات شفاه", "تنسيقات gloss مناسبة للهدايا والسفر والعناية."],
        ["عودة باليت الجمال", "باليت أنيقة تناسب gloss مونا المفضل لديك."],
      ],
    },
    privacy: {
      eyebrow: "سياسة الخصوصية",
      title: "الخصوصية لدى Mouna Cosmetics",
      description: "نظرة بسيطة على كيفية التعامل مع معلومات العملاء عند التواصل أو الطلب.",
      sections: [
        ["المعلومات التي قد نجمعها", "عند التواصل مع Mouna Cosmetics، قد تشاركين الاسم، معلومات التواصل، المدينة وتفضيلات الطلب."],
        ["طريقة الاستخدام", "تستخدم المعلومات للرد، تأكيد الطلبات، ترتيب التوصيل وتقديم الدعم."],
        ["المشاركة والتخزين", "لا تبيع Mouna Cosmetics معلومات العملاء. قد تتم مشاركة التفاصيل فقط لإتمام الطلب عند الحاجة."],
        ["ملاحظة مؤقتة", "هذه السياسة نص أساسي ويجب مراجعته من مختص قبل اعتباره نصاً قانونياً نهائياً."],
      ],
    },
    terms: {
      eyebrow: "شروط الاستخدام",
      title: "شروط بسيطة للموقع",
      description: "نظرة عامة على استخدام الموقع وفهم معلومات المنتجات.",
      sections: [
        ["استخدام الموقع", "هذا الموقع يقدم Mouna Cosmetics والمنتجات وقنوات التواصل."],
        ["معلومات المنتجات", "قد تتغير الأسماء والأسعار والتوفر والعروض. يجب تأكيد التفاصيل قبل الطلب."],
        ["الطلبات والتواصل", "لا تتم معالجة الدفع عبر الموقع. تتم المحادثات عبر قنوات التواصل المذكورة."],
        ["ملاحظة مؤقتة", "هذه الشروط نص أساسي ويجب مراجعته من مختص قبل اعتمادها نهائياً."],
      ],
    },
  },
  es: {
    common: {
      brand: "MOUNA",
      brandFull: "MOUNA COSMETICS",
      cosmetics: "Cosméticos",
      instagram: "Instagram",
      tiktok: "TikTok",
      whatsapp: "WhatsApp",
      language: "Idioma",
      light: "Claro",
      dark: "Oscuro",
      quickLinks: "Enlaces",
      connect: "Conectar",
      footerTagline: "Cosméticos de lujo para una belleza moderna.",
      rights: "Todos los derechos reservados.",
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      launches: "Lanzamientos",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contacto",
      ourStory: "Nuestra historia",
      products: "Productos",
      comingSoon: "Próximamente",
      privacyPolicy: "Privacidad",
      termsOfUse: "Términos",
    },
    home: {
      heroSubtitle: "Belleza eterna. Lujo moderno.",
      shopSoon: "MUY PRONTO",
      contactInstagram: "CONTACTAR EN INSTAGRAM",
      storyTitle: "Nuestra historia",
      storyOne: "Mouna Cosmetics nació de una pasión por la belleza limpia y lujosa, donde la simplicidad y los buenos ingredientes crean confianza.",
      storyTwo: "Cada producto está pensado para realzar tu belleza natural con una experiencia cuidada, suave y elegante.",
      featuredProducts: "Productos destacados",
      orderWhatsapp: "PEDIR POR WHATSAPP",
      bundleTitle: "Sets y ahorro",
      save: "Ahorra",
      freeShipping: "Envío gratis",
      freeShippingNote: "En pedidos desde 395dh",
      whyTitle: "¿Por qué Mouna?",
      benefitOneTitle: "Brillo intenso",
      benefitOneText: "Acabado glossy sin sensación pegajosa",
      benefitTwoTitle: "Con manteca de karité",
      benefitTwoText: "Nutre e hidrata los labios",
      benefitThreeTitle: "Fórmula limpia",
      benefitThreeText: "Vegana, cruelty-free, sin gluten y sin parabenos",
      gallery: "Galería",
      contactTitle: "Contacto",
      contactText: "Síguenos en Instagram y TikTok, o escríbenos por WhatsApp.",
      followInstagram: "SEGUIR EN INSTAGRAM",
      followTiktok: "SEGUIR EN TIKTOK",
      contactWhatsapp: "CONTACTAR POR WHATSAPP",
    },
    about: {
      eyebrow: "Nuestra historia",
      title: "Belleza con una firma suave",
      description: "Mouna Cosmetics crea glosses elegantes para la confianza diaria, momentos especiales y rituales de cuidado.",
      bodyOne: "La marca se basa en acabados luminosos, texturas cómodas y tonos fáciles de llevar.",
      bodyTwo: "Desde glosses suaves hasta sets para regalar, Mouna Cosmetics apuesta por detalles elegantes y simples.",
      values: ["Alto brillo", "Sensación limpia", "Listo para regalar"],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Habla con Mouna",
      description: "Para pedidos, ayuda con tonos, entrega o colaboraciones, usa los canales de abajo.",
      instagramNote: "Sigue lanzamientos, looks y novedades de la marca.",
      tiktokNote: "Mira swatches, rutinas y momentos de producto.",
      whatsappNote: "Pregunta por disponibilidad, entrega y pedidos.",
      simple: "Contacto simple",
      helpTitle: "¿Necesitas ayuda para elegir?",
      helpText: "Envía tu acabado preferido, tono de piel y si buscas un tono natural o un brillo más visible.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Respuestas útiles antes de pedir",
      description: "Una guía simple sobre pedidos, entrega, pago, devoluciones, ingredientes y elección de color.",
      items: [
        ["¿Cómo hago un pedido?", "Los pedidos se gestionan por WhatsApp. Envía el producto, cantidad y ciudad para confirmar los detalles."],
        ["¿Dónde entregan?", "La entrega se confirma por mensaje según ciudad y disponibilidad. Puede aplicar envío gratis según el pedido."],
        ["¿Qué métodos de pago hay?", "Las opciones de pago se confirman durante la conversación por WhatsApp."],
        ["¿Puedo devolver un producto?", "Por higiene, los cosméticos abiertos pueden no ser retornables. Contacta pronto si el pedido llega dañado o incorrecto."],
        ["¿Qué ingredientes tienen?", "Los glosses Mouna se presentan como fórmulas limpias con ingredientes nutritivos como manteca de karité. Revisa el empaque si tienes sensibilidad."],
        ["¿Cómo elijo un color de gloss?", "Para un look natural, elige un tono cercano a tus labios. Para más brillo, elige un tono más cálido o luminoso."],
      ],
    },
    blog: {
      eyebrow: "Diario",
      title: "Notas Mouna",
      description: "Pronto llegarán artículos de belleza con guías de tonos, rituales y lanzamientos.",
      comingSoon: "Próximamente",
      articles: [
        ["Guía de tonos", "Cómo elegir tu gloss diario", "Una guía suave para combinar colores con tus labios, maquillaje y estilo."],
        ["Notas de belleza", "El lujo discreto de un labio pulido", "Un artículo sobre brillo, comodidad y detalles elevados."],
        ["Regalos", "Crear un set Mouna", "Ideas para combinar glosses y paletas en regalos elegantes."],
      ],
    },
    launches: {
      eyebrow: "Próximamente",
      title: "Lo próximo de Mouna",
      description: "Nuevos productos se preparan con el mismo brillo suave, acabado refinado y presentación elegante.",
      watch: "VER NOVEDADES",
      items: [
        ["Nuevos tonos de gloss", "Tonos brillantes para diario y noche."],
        ["Sets de labios", "Combinaciones de gloss para regalar, viajar y cuidarte."],
        ["Reposición de paleta", "Una paleta pulida para combinar con tu gloss Mouna favorito."],
      ],
    },
    privacy: {
      eyebrow: "Privacidad",
      title: "Privacidad en Mouna Cosmetics",
      description: "Una descripción simple de cómo se puede manejar la información al contactar o pedir.",
      sections: [
        ["Información que podemos recopilar", "Al contactar con Mouna Cosmetics, puedes compartir nombre, datos de contacto, ciudad y preferencias de pedido."],
        ["Cómo se usa", "La información se usa para responder, confirmar pedidos, organizar entregas y dar soporte."],
        ["Compartir y almacenar", "Mouna Cosmetics no vende información de clientes. Puede compartirse solo si es necesario para completar un pedido."],
        ["Aviso provisional", "Esta política es un texto básico y debe ser revisada por un profesional antes de considerarse definitiva."],
      ],
    },
    terms: {
      eyebrow: "Términos de uso",
      title: "Términos simples del sitio",
      description: "Una vista básica sobre el uso del sitio y la información de productos.",
      sections: [
        ["Uso del sitio", "Este sitio presenta Mouna Cosmetics, información de productos y canales de contacto."],
        ["Información de productos", "Nombres, precios, disponibilidad y ofertas pueden cambiar. Confirma los detalles antes de pedir."],
        ["Pedidos y comunicación", "Los pedidos no se procesan con checkout en este sitio. La comunicación se realiza por los canales indicados."],
        ["Aviso provisional", "Estos términos son un texto básico y deben ser revisados por un profesional antes de ser definitivos."],
      ],
    },
  },
} as const;

type Dictionary = (typeof dictionaries)[LanguageCode];

type LanguageContextValue = {
  language: LanguageCode;
  direction: Direction;
  dictionary: Dictionary;
  selectedLanguage: (typeof languages)[number];
  setLanguage: (language: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    getStoredLanguage,
    getLanguageServerSnapshot,
  );

  const selectedLanguage = useMemo(
    () => languages.find((item) => item.code === language) ?? languages[0],
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = selectedLanguage.dir;
  }, [language, selectedLanguage.dir]);

  const value = useMemo(
    () => ({
      language,
      direction: selectedLanguage.dir,
      dictionary: dictionaries[language],
      selectedLanguage,
      setLanguage: (nextLanguage: LanguageCode) => {
        window.localStorage.setItem("mouna-language", nextLanguage);
        window.dispatchEvent(new Event("mouna-language-change"));
      },
    }),
    [language, selectedLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }

  return context;
}
