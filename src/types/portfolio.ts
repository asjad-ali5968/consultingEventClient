import type { HeroSlide, ReviewsData } from "@/types/home";
import type {
  PortfolioClientsData,
  PortfolioNewsletterData,
} from "@/types/sharedSections";

export type PortfolioCategory = "all" | "weddings" | "couples" | "events";

export type PortfolioPhoto = {
  src: string;
  alt: string;
  category: Exclude<PortfolioCategory, "all">;
  width: number;
  height: number;
};

export type PortfolioMasonryCategory = {
  label: string;
  value: PortfolioCategory;
};

export type PortfolioMasonryData = {
  categories: PortfolioMasonryCategory[];
  photos: PortfolioPhoto[];
};

export type PortfolioPageData = {
  heroSlides: HeroSlide[];
  masonry: PortfolioMasonryData;
  reviewsData: ReviewsData;
  newsletter: PortfolioNewsletterData;
  clients: PortfolioClientsData;
};

