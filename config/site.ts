import { SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Gagandeep Singh",
  shortName: "Gagandeep Singh",
  description:
    "Portfolio of Gagandeep Singh, a full-stack developer building scalable, secure, and user-focused web applications and digital products.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    linkedin: "https://www.linkedin.com/in/imgagandeep/",
    github: "https://github.com/imgagandeep",
  },
  mailSupport: "gagandeepdevs@gmail.com",
};
