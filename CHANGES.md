# SEO, GEO, and AEO changes

## What changed

- Added static prerendering for the home, about, contact, and four project routes, including route-specific head tags and JSON-LD.
- Added canonical internal navigation, answer-first copy, semantic page sections, descriptive image text, and project summaries and update dates.
- Generated `public/sitemap.xml`, `public/llms.txt`, and their deployable `dist` copies from the route registry during production builds.
- Added crawler directives, a noindex 404 page, Netlify redirects, deployment-preview noindex headers, and security/cache headers.
- Added Open Graph and favicon assets, a locally hosted preloaded font, route-level code splitting, and WebP versions of large page images.
- Delayed Microsoft Clarity until explicit opt-in and removed the nonfunctional Vercel Analytics script integration.
- Updated secondary text contrast and accessible names; Lighthouse SEO and accessibility scores are 100 for both audited pages.

## Files changed

- Root: `CHANGES.md`, `index.html`, `netlify.toml`, `package.json`, `package-lock.json`.
- Build: `scripts/prerender.mjs`.
- Public files: `_redirects`, `404.html`, `apple-touch-icon.png`, `favicon.png`, `fonts/geist-latin-wght-normal.woff2`, `llms.txt`, `og.png`, `profile.png`, `robots.txt`, and generated `sitemap.xml`.
- Components: `src/Components/About.jsx`, `AnimatedContent.jsx`, `Contact.jsx`, `ECA.jsx`, `Education.jsx`, `Home/Footer.jsx`, `Home/Home.jsx`, `Home/Navber.jsx`, `Main.jsx`, `Project.jsx`, `ProjectCard.jsx`, `ProjectDetails.jsx`, `ScrambleText.jsx`, `Seo.jsx`, and `Skills.jsx`.
- Routing and styles: `src/entry-server.jsx`, `src/index.css`, `src/main.jsx`, `src/routers/AppRouters.jsx`, and `src/data/site.js`.
- Added WebP assets: `src/assets/Daily News.webp`, `DailyNews.webp`, `DailyNews1.webp`, `DailyNews2.webp`, `heroPhotonew_photo.webp`, `PhiMart.webp`, `PhiMart1.webp`, `PhiMart2.webp`, and `tripbooking_public.webp`.
- Removed their unused PNG originals: `src/assets/Daily News.png`, `DailyNews.png`, `DailyNews1.png`, `DailyNews2.png`, `heroPhotonew_photo.png`, `PhiMart.png`, `PhiMart1.png`, `PhiMart2.png`, and `tripbooking_public.png`.

## TODOs and manual steps

- TODO: Add a public tripbooking.ai repository URL if one is available; none exists in the current project data.
- TODO: Add a verified measured outcome for tripbooking.ai if one becomes available; the current project data contains no result metric.
- Deploy the changes to the production Netlify site, then confirm production responses for every canonical URL, the no-trailing-slash redirects, and a made-up URL returning 404.
- Submit `https://meheedi-hasan.netlify.app/sitemap.xml` in Google Search Console and Bing Webmaster Tools after deployment, then monitor indexing. Search engines control indexing and timing.
- IndexNow was optional and was not implemented.
