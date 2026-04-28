import type { HeroSlide } from "@/types/home";
import type { ContactFaqData } from "@/types/about";
import type {
  PortfolioClientsData,
  PortfolioNewsletterData,
} from "@/types/sharedSections";

export type ContactDetailsInfoItem = {
  label: string;
  value: string;
};

export type ContactDetailsData = {
  left: {
    title: string;
    items: {
      phone: ContactDetailsInfoItem;
      email: ContactDetailsInfoItem;
      address: { label: string; lines: string[] };
    };
  };
  right: {
    title: string;
    description: string;
    form: {
      placeholders: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
      };
      submitLabel: string;
    };
  };
};

export type ContactMapData = {
  iframeTitle: string;
  src: string;
  loading: "eager" | "lazy";
};

export type ContactPageData = {
  heroSlides: HeroSlide[];
  contactDetailsData: ContactDetailsData;
  contactMapData: ContactMapData;
  contactFaqData: ContactFaqData;
  newsletter: PortfolioNewsletterData;
  clients: PortfolioClientsData;
};

