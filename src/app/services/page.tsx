import PortfolioHero from "@/_components/Home/PortfolioHero";
import Reviews from "@/_components/Home/Reviews";
import Services from "@/_components/Home/Services";
import PortfolioNewsletter from "@/_components/Home/PortfolioNewsletter";
import PortfolioClients from "@/_components/Home/PortfolioClients";
import ContactFaq from "@/_components/Contact/ContactFaq";
import {
  clients,
  contactFaqData,
  heroSlides,
  newsletter,
  reviewsData,
  servicesData,
} from "@/helper/servicesData";

export default function ServicesPage() {
  return (
    <>
      <PortfolioHero slides={heroSlides} />
      <Services data={servicesData} servicesPage />
      <Reviews data={reviewsData} />
      <ContactFaq data={contactFaqData} />
      <PortfolioNewsletter data={newsletter} />
      <PortfolioClients data={clients} />
    </>
  );
}
