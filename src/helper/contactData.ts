import type { ContactPageData } from "@/types/contact";

export const contactPageData: ContactPageData = {
  heroSlides: [
    {
      image: "/sliderImag/hero4.webp",
      tag: "Get in touch",
      title: "Contact Information",
      description:
        "Fill out the form below I’ll get back to you within <span>24 hours</span> to book a discovery call and start chatting about all the exciting possibilities.",
    },
  ],
  contactDetailsData: {
    left: {
      title: "Contact Information",
      items: {
        phone: { label: "Exploration Call", value: "855 100 3333" },
        email: { label: "Email Info", value: "wedding@florya.com" },
        address: {
          label: "Address",
          lines: ["WARREN, NJ, 07059", "United States of America"],
        },
      },
    },
    right: {
      title: "Get in touch",
      description: "Ask me a question, I'd love to hear more from you.",
      form: {
        placeholders: {
          name: "Your Name *",
          email: "Your Email *",
          phone: "Your Number *",
          subject: "Subject *",
          message: "Message *",
        },
        submitLabel: "Send Message",
      },
    },
  },
  contactMapData: {
    iframeTitle: "Eventdecor location map",
    src: "https://www.google.com/maps?q=WARREN,+NJ,+07059,+United+States+of+America&z=14&output=embed",
    loading: "eager",
  },
  contactFaqData: {
    eyebrow: "FAQs",
    heading: { title: "Event", scriptWord: "Questions" },
    description:
      "Here are common questions clients ask before planning birthdays and private events. Tap a question to view details and compare your options quickly.",
    items: [
      {
        question: "How early should I book you for a birthday event?",
        answer:
          "For most birthday events, booking 4 to 8 weeks in advance works best. For milestone birthdays or peak weekends, 2 to 3 months ahead is ideal.",
      },
      {
        question:
          "Can you manage both decor and vendor coordination for events?",
        answer:
          "Yes. We can handle decor planning, styling setup, and vendor coordination so your timeline, theme, and logistics stay aligned from start to finish.",
      },
      {
        question: "What is the best way to plan a last-minute event?",
        answer:
          "Focus on guest count, venue, and one clear theme first. We then prioritize high-impact decor elements and a simplified execution plan to deliver on time.",
      },
      {
        question: "Do you offer custom themes for kids and adult birthdays?",
        answer:
          "Absolutely. We design custom concepts for kids, teens, and adult birthdays, including color palettes, backdrops, table styling, and photo-focused decor moments.",
      },
      {
        question: "Can you work within a fixed event budget?",
        answer:
          "Yes. We build a decor plan around your target budget and suggest where to invest most for visual impact while keeping the full setup cost-efficient.",
      },
    ],
  },
  newsletter: {
    image: {
      src: "/service/signup.webp",
      alt: "Couple holding hands on a bridge",
    },
    eyebrow: "Sign Up",
    heading: {
      title: "Get Personalized",
      scriptWord: "Quotation",
    },
    description:
      "For the latest inspiration and insider tips straight to your inbox.",
    form: {
      action: "#",
      method: "post",
      fields: {
        name: { placeholder: "Full Name *", autoComplete: "name" },
        email: { placeholder: "Email Address *", autoComplete: "email" },
      },
      submitLabel: "Send",
    },
  },
  clients: {
    clientLogos: [
      "/img/clients/1.png",
      "/img/clients/2.png",
      "/img/clients/3.png",
      "/img/clients/4.png",
      "/img/clients/5.png",
      "/img/clients/6.png",
    ],
    moveIntervalMs: 5000,
  },
};

export const {
  heroSlides,
  contactDetailsData,
  contactMapData,
  contactFaqData,
  newsletter,
  clients,
} = contactPageData;
