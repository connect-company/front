import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://connectlabor.kr", lastModified: new Date() },
    { url: "https://connectlabor.kr/about", lastModified: new Date() },
    { url: "https://connectlabor.kr/service", lastModified: new Date() },
  ];
}
