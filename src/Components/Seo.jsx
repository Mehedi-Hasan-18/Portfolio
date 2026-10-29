import { useEffect } from "react";
import { SITE_URL } from "../data/site";

const setMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const Seo = ({ page, type = "website" }) => {
  useEffect(() => {
    if (!page) return;

    const url = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1");
    setMeta("name", "theme-color", "#0a0a0b");
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", `${SITE_URL}/og.png`);
    setMeta("property", "og:site_name", "Mehedi Hasan");
    setMeta("property", "og:locale", "en_US");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", `${SITE_URL}/og.png`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [page, type]);

  return null;
};

export default Seo;
