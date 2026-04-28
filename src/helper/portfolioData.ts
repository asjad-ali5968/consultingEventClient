import type { PortfolioPageData } from "@/types/portfolio";

export const portfolioPageData: PortfolioPageData = {
  heroSlides: [
    {
      image: "/sliderImag/hero2.webp",
      tag: "Dream Maker",
      title: "Birthday & Event Planner For Colorful Couples",
      description:
        "We would love to meet up and chat about how we can make <span>your dream</span> Event happen!",
    },
  ],
  masonry: {
    categories: [
      { label: "All", value: "all" },
      { label: "Event", value: "weddings" },
      { label: "Ballons", value: "couples" },
      { label: "Birthday", value: "events" },
    ],
    photos: [
      {
        src: "/img/portfolio/4.webp",
        alt: "Couple standing in formalwear",
        category: "weddings",
        width: 540,
        height: 960,
      },
      {
        src: "/img/portfolio/2.webp",
        alt: "Bride and groom indoor portrait",
        category: "events",
        width: 540,
        height: 960,
      },
      {
        src: "/img/portfolio/3.webp",
        alt: "Bride and groom evening portrait",
        category: "weddings",
        width: 540,
        height: 960,
      },
      {
        src: "/img/portfolio/1.webp",
        alt: "Couple portrait outdoors",
        category: "couples",
        width: 640,
        height: 1136,
      },
      {
        src: "/img/portfolio/5.webp",
        alt: "Couple close-up portrait",
        category: "couples",
        width: 640,
        height: 1136,
      },
      {
        src: "/img/portfolio/6.webp",
        alt: "Wedding portrait by stairs",
        category: "weddings",
        width: 612,
        height: 1088,
      },
      {
        src: "/img/portfolio/7.webp",
        alt: "Couple romantic portrait",
        category: "couples",
        width: 640,
        height: 1136,
      },
      {
        src: "/img/portfolio/8.webp",
        alt: "Wedding ceremony couple shot",
        category: "events",
        width: 540,
        height: 960,
      },
      {
        src: "/img/portfolio/9.webp",
        alt: "Bride and groom close-up portrait",
        category: "weddings",
        width: 540,
        height: 960,
      },
    ],
  },
  reviewsData: {
    backgroundImage: "/img/slider/17.jpeg",
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

export const { heroSlides, masonry, reviewsData, newsletter, clients } =
  portfolioPageData;
