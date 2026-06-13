import type { MetadataRoute } from "next";

const SITE_URL = "https://divineindiaexports.com";

const routes = [
  "/",
  "/products",
  "/export",
  "/certifications",
  "/testimonials",
  "/careers",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
