import type { ServicesPageData } from "@/types/services";

export const servicesPageData: ServicesPageData = {
  heroSlides: [
    {
      image: "/sliderImag/hero1.webp",
      tag: "Our Services",
      title: "Birthday & Event Planner For Colorful Couples",
      description:
        "We would love to meet up and chat about how we can make <span>your dream</span> Event happen!",
    },
  ],
  servicesData: {
    eyebrow: "The Experience",
    heading: {
      title: "Explore",
      scriptWord: "Services",
    },
    description:
      "Professional wedding and event planning with thoughtful styling, creative direction, and seamless execution for every celebration. Explore our services to find the perfect fit for your next event.",
    items: [
      { title: "Corporate ", accent: "Events", image: "/service/service2.jpg" },
      { title: "Birthday", accent: "Planner", image: "/service/service1.jpg" },
      { title: "Master of", accent: "Decor", image: "/service/service3.jpg" },
      {
        title: "Birthday",
        accent: "Decoration",
        image: "/service/service4.webp",
      },
      { title: "Engagement", accent: "Decor", image: "/service/service5.heic" },
      { title: "Luxury", accent: "Setups", image: "/service/service7.jpg" },
    ],
    itemCtaLabel: "Explore More →",
  },
  reviewsData: {
    backgroundImage: "/review.webp",
    starsText: "★★★★★",
    items: [
      {
        name: "L. Mata",
        message:
          "Lia is communicative, reasonably priced & most of all she delivered as expected. Love the balloons!! Will def book her again for my next event. Thanks Lia!!",
      },
      {
        name: "M.Austin",
        message:
          "Beasty Events Decor should be your first stop for any event. They are extremely professional and patient with their clients (my experiences has always been top tier). The work load and effort that is put into the work was definitely worth my coins. Stay bless and continue to Beasty Events Decor.",
      },
      {
        name: "Pedro Lawrence",
        message:
          "I honestly have to admit I was not sure what to expect at first, but after my experience, it was nothing short of amazing. From the hospitality to pricing, the quality of service was very impressive. Everything was really great. I recommend it to anyone. You will not be disappointed.",
      },
    ],
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
  servicesData,
  reviewsData,
  contactFaqData,
  newsletter,
  clients,
} = servicesPageData;
