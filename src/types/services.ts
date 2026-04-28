import type { ContactFaqData } from "@/types/about";
import type { HeroSlide, ReviewsData, ServicesData } from "@/types/home";
import type {
  PortfolioClientsData,
  PortfolioNewsletterData,
} from "@/types/sharedSections";

export type ServicesPageData = {
  heroSlides: HeroSlide[];
  servicesData: ServicesData;
  reviewsData: ReviewsData;
  contactFaqData: ContactFaqData;
  newsletter: PortfolioNewsletterData;
  clients: PortfolioClientsData;
};

