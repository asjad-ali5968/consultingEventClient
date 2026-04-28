export type PortfolioClientsData = {
  clientLogos: string[];
  moveIntervalMs: number;
};

export type PortfolioNewsletterData = {
  image: {
    src: string;
    alt: string;
  };
  eyebrow: string;
  heading: {
    title: string;
    scriptWord: string;
  };
  description: string;
  form: {
    action: string;
    method: "get" | "post";
    fields: {
      name: { placeholder: string; autoComplete?: string };
      email: { placeholder: string; autoComplete?: string };
    };
    submitLabel: string;
  };
};

