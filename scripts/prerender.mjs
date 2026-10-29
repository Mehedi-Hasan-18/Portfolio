import { createServer } from "vite";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BUILD_DATE, PAGE_SEO, SITE_ROUTES, SITE_URL } from "../src/data/site.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const server = await createServer({
  configFile: path.join(root, "vite.config.js"),
  resolve: {
    alias: [
      {
        find: /^react-router-dom$/,
        replacement: path.join(root, "node_modules/react-router-dom/dist/index.mjs"),
      },
      {
        find: /^react-router\/dom$/,
        replacement: path.join(root, "node_modules/react-router/dist/development/dom-export.mjs"),
      },
      {
        find: /^react-router$/,
        replacement: path.join(root, "node_modules/react-router/dist/development/index.mjs"),
      },
    ],
  },
  server: { middlewareMode: true },
  appType: "custom",
});

const escapeAttribute = (value) =>
  String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

const createJsonLd = (page) => {
  const personId = `${SITE_URL}/#person`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: `${SITE_URL}${page.path}`,
      },
    ],
  };

  if (page.path === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Mehedi Hasan",
        url: `${SITE_URL}/`,
        publisher: { "@id": personId },
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": personId,
        name: "Mehedi Hasan",
        jobTitle: "Frontend Software Engineer",
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/profile.png`,
        description: PAGE_SEO.home.description,
        knowsAbout: [
          "JavaScript",
          "React",
          "Next.js",
          "TypeScript",
          "Python",
          "Django",
          "Tailwind CSS",
          "PostgreSQL",
        ],
        sameAs: [
          "https://github.com/Mehedi-Hasan-18",
          "https://www.linkedin.com/in/mehedi-hasan-85278b2a0/",
          "https://youtube.com/@meheeeedi_hasan",
          "https://www.facebook.com/mehedi.hasan.312630/",
          "https://www.instagram.com/meheeeeedi_hasan/",
          "https://codeforces.com/profile/mehedi_hasan_18",
          "https://www.codechef.com/users/mehedi_hasan18",
          "https://x.com/MehediHasa48813",
        ],
      },
    ];
  }

  if (page.path === "/about") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: page.title,
        url: `${SITE_URL}${page.path}`,
        mainEntity: { "@id": personId },
      },
      breadcrumb,
    ];
  }

  if (page.path === "/contact") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: page.title,
        url: `${SITE_URL}${page.path}`,
        mainEntity: { "@id": personId },
      },
      breadcrumb,
    ];
  }

  const projectId = page.path.slice("/project/".length);
  const project = PAGE_SEO.projects[projectId];
  const work = {
    "@context": "https://schema.org",
    "@type": project.repositoryUrl ? "SoftwareSourceCode" : "CreativeWork",
    name: page.title.split(" | ")[0],
    description: project.summary,
    url: `${SITE_URL}${page.path}`,
    author: { "@id": personId },
    keywords: project.keywords,
  };
  if (project.liveUrl) work.sameAs = [project.liveUrl];
  if (project.repositoryUrl) work.codeRepository = project.repositoryUrl;
  return [work, breadcrumb];
};

const createHead = (page, lcpImage) => {
  const canonical = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
  const type = page.path.startsWith("/project/") ? "article" : "website";
  const tags = [
    `<meta name="description" content="${escapeAttribute(page.description)}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    '<meta name="theme-color" content="#0a0a0b" />',
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:title" content="${escapeAttribute(page.title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE_URL}/og.png" />`,
    '<meta property="og:site_name" content="Mehedi Hasan" />',
    '<meta property="og:locale" content="en_US" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
    `<meta name="twitter:image" content="${SITE_URL}/og.png" />`,
  ];
  if (lcpImage) {
    tags.push(`<link rel="preload" href="${escapeAttribute(lcpImage)}" as="image" fetchpriority="high" />`);
  }
  const jsonLd = createJsonLd(page);
  for (const block of jsonLd) JSON.parse(JSON.stringify(block));
  tags.push(
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  );
  return `<title>${page.title}</title>\n    ${tags.join("\n    ")}`;
};

const resolveImages = async (html) => {
  const assetFiles = await readdir(path.join(dist, "assets"));
  const imageReferences = [...html.matchAll(/(src|srcSet|href)="([^"]+)"/g)];
  for (const [, attribute, value] of imageReferences) {
    if (!value.includes("/src/assets/")) continue;
    const sourcePath = decodeURIComponent(value.split(",")[0].trim());
    const basename = path.basename(sourcePath);
    const stem = path.parse(basename).name;
    const extension = path.extname(basename).toLowerCase();
    const builtAsset = assetFiles.find(
      (file) =>
        file.startsWith(`${stem}-`) &&
        path.extname(file).toLowerCase() === extension,
    );
    let resolved;
    if (builtAsset) {
      resolved = `/assets/${builtAsset}`;
    } else {
      const sourceFile = path.join(root, "src", "assets", basename);
      const source = await readFile(sourceFile);
      const mimeType = {
        ".avif": "image/avif",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp",
      }[path.extname(basename).toLowerCase()];
      if (!mimeType) throw new Error(`Unsupported image asset: ${basename}`);
      resolved = `data:${mimeType};base64,${source.toString("base64")}`;
    }
    html = html.replaceAll(`${attribute}="${value}"`, `${attribute}="${resolved}"`);
  }
  return html;
};

try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const template = await readFile(path.join(dist, "index.html"), "utf8");

  for (const page of SITE_ROUTES) {
    if (page.title.length >= 60) throw new Error(`Title is too long: ${page.title}`);
    if (page.description.length < 140 || page.description.length > 160) {
      throw new Error(`Description must be 140–160 characters for ${page.path}: ${page.description.length}`);
    }

    let pageHtml = await resolveImages(render(page.path));
    const h1Count = (pageHtml.match(/<h1(?:\s|>)/g) || []).length;
    if (h1Count !== 1) throw new Error(`Expected one h1 on ${page.path}, got ${h1Count}`);
    if (!pageHtml.includes("Mehedi Hasan") || !pageHtml.includes("<nav")) {
      throw new Error(`Missing site identity or navigation on ${page.path}`);
    }

    let lcpImage;
    if (page.path === "/" || page.path.startsWith("/project/")) {
      const preload = pageHtml.match(
        /<link rel="preload" as="image" href="([^"]+)"[^>]*\/?>/,
      );
      if (!preload) throw new Error(`Missing LCP image preload for ${page.path}`);
      lcpImage = preload[1];
      pageHtml = pageHtml.replace(preload[0], "");
    }
    if (/<img\b[^>]*src=""/i.test(pageHtml) || pageHtml.includes("/src/assets/")) {
      throw new Error(`Unresolved image URL on ${page.path}`);
    }
    const html = template
      .replace(/<title>[\s\S]*?<\/title>/i, createHead(page, lcpImage))
      .replace('<div id="root"></div>', `<div id="root">${pageHtml}</div>`);
    const output = page.path === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, page.path.slice(1), "index.html");
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
    console.log(`Prerendered ${page.path} -> ${path.relative(root, output)}`);
  }

  const urls = SITE_ROUTES.map(
    (page) => `  <url>\n    <loc>${SITE_URL}${page.path === "/" ? "/" : page.path}</loc>\n    <lastmod>${BUILD_DATE}</lastmod>\n  </url>`,
  ).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap);
  await writeFile(path.join(root, "public", "sitemap.xml"), sitemap);

  const bots = [
    "Googlebot",
    "Bingbot",
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
  ];
  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    ...bots.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
  await writeFile(path.join(dist, "robots.txt"), robots);
  await writeFile(path.join(root, "public", "robots.txt"), robots);

  const pages = SITE_ROUTES.filter((page) => !page.path.startsWith("/project/"));
  const projects = SITE_ROUTES.filter((page) => page.path.startsWith("/project/"));
  const llmsText = [
    "# Mehedi Hasan",
    "",
    "> Mehedi Hasan is a frontend-focused software engineer building responsive web applications. This site presents his background, contact information, and software projects.",
    "",
    "## Pages",
    ...pages.map((page) => `- [${page.title}](${SITE_URL}${page.path}): ${page.description}`),
    "",
    "## Projects",
    ...projects.map((page) => `- [${page.title}](${SITE_URL}${page.path}): ${page.summary}`),
    "",
  ].join("\n");
  await writeFile(path.join(dist, "llms.txt"), llmsText);
  await writeFile(path.join(root, "public", "llms.txt"), llmsText);
} finally {
  await server.close();
}
