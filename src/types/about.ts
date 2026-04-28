import type { HeroSlide } from "@/types/home";
import type {
  PortfolioClientsData,
  PortfolioNewsletterData,
} from "@/types/sharedSections";

export type WeddingTeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  paragraphs: string[];
};

export type WeddingTeamData = {
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  members: WeddingTeamMember[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactFaqData = {
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  description: string;
  items: FaqItem[];
};

export type AboutPageData = {
  heroSlides: HeroSlide[];
  weddingTeamData: WeddingTeamData;
  contactFaqData: ContactFaqData;
  portfolioNewsletterData: PortfolioNewsletterData;
  portfolioClientsData: PortfolioClientsData;
};

