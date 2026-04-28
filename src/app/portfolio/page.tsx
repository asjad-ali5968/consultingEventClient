import PortfolioHero from "@/_components/Home/PortfolioHero";
import PortfolioClients from "@/_components/Home/PortfolioClients";
import PortfolioMasonry from "@/_components/Home/PortfolioMasonry";
import PortfolioNewsletter from "@/_components/Home/PortfolioNewsletter";
import Reviews from "@/_components/Home/Reviews";
import {
  clients,
  heroSlides,
  masonry,
  newsletter,
  reviewsData,
} from "@/helper/portfolioData";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero slides={heroSlides} />
      <PortfolioMasonry data={masonry} />
      <Reviews data={reviewsData} />
      <PortfolioNewsletter data={newsletter} />
      <PortfolioClients data={clients} />
    </>
  );
}
