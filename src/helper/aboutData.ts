import type { AboutPageData } from "@/types/about";

export const aboutPageData: AboutPageData = {
  heroSlides: [
    {
      image: "/sliderImag/hero3.webp",
      tag: "Get in touch",
      title: "Contact Information",
      description:
        "Fill out the form below I’ll get back to you within <span>24 hours</span> to book a discovery call and start chatting about all the exciting possibilities.",
    },
  ],
  weddingTeamData: {
    eyebrow: "Our Senior",
    heading: {
      title: "Wedding",
      scriptWord: "Team",
    },
    members: [
      {
        name: "Jessica",
        role: "Event Planner",
        image: "/img/portfolio/2.webp",
        imageAlt: "Event planner smiling while working on a laptop",
        imageFirst: true,
        paragraphs: [
          "Our goal is to make things easier when planning your event, whether its a meeting, corporate events, birthday, baby shower, gender reveal, sweet sixteen, or even a wedding Beasty Events Decor has you covered. We provide you with service but most of all its the quality experience. we work with you to help you decide the perfect menu for your event.",
        ],
      },
      {
        name: "Patricia",
        role: "catering Planner",
        image: "/img/portfolio/1.webp",
        imageAlt: "Wedding planner smiling with a laptop",
        imageFirst: false,
        paragraphs: [
          "Our goal is to make things easier when planning your event, whether its a meeting, corporate events, birthday, baby shower, gender reveal, sweet sixteen, or even a wedding Beasty Events Decor has you covered. We provide you with service but most of all its the quality experience. we work with you to help you decide the perfect menu for your event.",
        ],
      },
    ],
  },
  contactFaqData: {
    eyebrow: "FAQs",
    heading: {
      title: "Event",
      scriptWord: "Questions",
    },
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
  portfolioNewsletterData: {
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
  portfolioClientsData: {
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
  weddingTeamData,
  contactFaqData,
  portfolioNewsletterData,
  portfolioClientsData,
} = aboutPageData;
