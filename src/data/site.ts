export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contactEmail: string;
  githubUrl: string;
  availability: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "devtrop",
  tagline: "Full-Stack Web & SaaS Engineering Studio",
  description:
    "We engineer scalable web applications and SaaS platforms for ambitious teams. Production-grade software with uncompromising craftsmanship.",
  url: "https://devtrop.com",
  contactEmail: "founders@devtrop.com",
  githubUrl: "https://github.com/devtrop",
  availability: "Available for new projects",
};
