export type HeroSlide = {
  image: string;
  tag: string;
  title: string;
  description: string; // supports a single "<span>highlight</span>" segment
};

export type HeroData = {
  slides: HeroSlide[];
};

export type WhatWeDoData = {
  eyebrow: string;
  heading: {
    line1: string;
    scriptWord: string;
    line2: string;
  };
  leftDescription: string;
  paragraphs: string[];
  cta: { label: string };
};

export type ServicesItem = {
  title: string;
  accent: string;
  image: string;
};

export type ServicesData = {
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  description: string;
  items: ServicesItem[];
  itemCtaLabel: string;
};

export type ReviewItem = {
  name: string;
  message: string;
};

export type ReviewsData = {
  backgroundImage: string;
  starsText: string;
  items: ReviewItem[];
};

export type AboutUsData = {
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  description: string;
  bullets: string[];
  signature: {
    initials: string;
    name: string;
    role: string;
  };
  portraitImage: string;
  portraitAlt: string;
  circleText: string;
};

export type MoreInfoItem = {
  title: string;
  subtitle: string;
  description: string;
};

export type MoreInfoData = {
  eyebrow: string;
  title: string;
  description: string;
  items: MoreInfoItem[];
  itemEyebrow: string;
};

export type PortfolioItem = {
  couple: string;
  location: string;
  image: string;
  description: string;
  planner: string;
  photographer: string;
  ctaHref: string;
  ctaLabel: string;
};

export type PortfolioData = {
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  items: PortfolioItem[];
};

export type ParallaxVideoData = {
  backgroundImage: string;
  tag: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  videoSrc: string; // raw path; component will encodeURI for safety
  playAriaLabel: string;
  closeAriaLabel: string;
};

export type PricingPlanItem = {
  title: string;
  price: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
};

export type PricingPlanData = {
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  description: string;
  plans: PricingPlanItem[];
};

export type HomePageData = {
  heroData: HeroData;
  whatWeDoData: WhatWeDoData;
  servicesData: ServicesData;
  reviewsData: ReviewsData;
  aboutUsData: AboutUsData;
  moreInfoData: MoreInfoData;
  portfolioData: PortfolioData;
  parallaxVideoData: ParallaxVideoData;
  pricingPlanData: PricingPlanData;
};

