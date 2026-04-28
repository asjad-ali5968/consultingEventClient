import WeddingTeam from "@/_components/About/WeddingTeam";

import PortfolioHero from "@/_components/Home/PortfolioHero";
import ContactFaq from "@/_components/Contact/ContactFaq";
import PortfolioClients from "@/_components/Home/PortfolioClients";
import PortfolioNewsletter from "@/_components/Home/PortfolioNewsletter";
import AboutUs from "@/_components/Home/AboutUs";
import Reviews from "@/_components/Home/Reviews";
import {
  contactFaqData,
  heroSlides,
  portfolioClientsData,
  portfolioNewsletterData,
  weddingTeamData,
} from "@/helper/aboutData";
import { aboutUsData, reviewsData } from "@/helper/homeData";

export default function ContactPage() {
  return (
    <>
      <PortfolioHero slides={heroSlides} />
      <AboutUs data={aboutUsData} />
      <WeddingTeam data={weddingTeamData} />
      <Reviews data={reviewsData} />
      <ContactFaq data={contactFaqData} />
      <PortfolioNewsletter data={portfolioNewsletterData} />
      <PortfolioClients data={portfolioClientsData} />
    </>
  );
}
