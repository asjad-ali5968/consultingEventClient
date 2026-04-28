import AboutUs from "@/_components/Home/AboutUs";
import Hero from "@/_components/Home/Hero";
import Reviews from "@/_components/Home/Reviews";
import Services from "@/_components/Home/Services";
import WhatWeDo from "@/_components/Home/WhatWeDo";
import MoreInfo from "@/_components/Home/MoreInfo";
import Portfolio from "@/_components/Home/Portfolio";
import ParallaxVideo from "@/_components/Home/ParallaxVideo";
import PricingPlan from "@/_components/Home/PricingPlan";
import {
  aboutUsData,
  heroData,
  moreInfoData,
  parallaxVideoData,
  portfolioData,
  pricingPlanData,
  reviewsData,
  servicesData,
  whatWeDoData,
} from "@/helper/homeData";
import PortfolioClients from "@/_components/Home/PortfolioClients";
import PortfolioNewsletter from "@/_components/Home/PortfolioNewsletter";
import { portfolioClientsData } from "@/helper/aboutData";
import { portfolioNewsletterData } from "@/helper/aboutData";

export default function Home() {
  return (
    <>
      <Hero slides={heroData.slides} />
      <WhatWeDo data={whatWeDoData} />
      <Services data={servicesData} />
      <Reviews data={reviewsData} />
      <AboutUs data={aboutUsData} />
      <MoreInfo data={moreInfoData} />
      <Portfolio data={portfolioData} />
      <ParallaxVideo data={parallaxVideoData} />
      <PricingPlan data={pricingPlanData} />
      <PortfolioNewsletter data={portfolioNewsletterData} />
      <PortfolioClients data={portfolioClientsData} />
    </>
  );
}
