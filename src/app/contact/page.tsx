"use client";

import PortfolioHero from "@/_components/Home/PortfolioHero";
import ContactDetails from "@/_components/Contact/ContactDetails";
import ContactMap from "@/_components/Contact/ContactMap";
import ContactFaq from "@/_components/Contact/ContactFaq";
import PortfolioClients from "@/_components/Home/PortfolioClients";
import PortfolioNewsletter from "@/_components/Home/PortfolioNewsletter";
import {
  clients,
  contactDetailsData,
  contactFaqData,
  contactMapData,
  heroSlides,
  newsletter,
} from "@/helper/contactData";

export default function ContactPage() {
  return (
    <>
      <PortfolioHero slides={heroSlides} />
      <ContactDetails data={contactDetailsData} />
      <ContactMap data={contactMapData} />
      <ContactFaq data={contactFaqData} />
      <PortfolioNewsletter data={newsletter} />
      <PortfolioClients data={clients} />
    </>
  );
}
