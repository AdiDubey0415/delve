type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const siteConfig: SiteConfig = {
  name: "Next Level UI",
  description:
    "Delve helps fast-growing companies get compliant with an AI-automated platform.",
  url: baseUrl,
  ogImage: `${baseUrl}/open-graph.png`,
};
