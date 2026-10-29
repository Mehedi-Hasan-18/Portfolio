export const SITE_URL = "https://meheedi-hasan.netlify.app";
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "Mehedi Hasan | Frontend Software Engineer (Next.js, React)",
    description:
      "Mehedi Hasan is a frontend-focused software engineer building responsive web experiences with React, Next.js and TypeScript. Explore his work and contact him.",
  },
  about: {
    path: "/about",
    title: "About Mehedi Hasan | Frontend Software Engineer",
    description:
      "Learn about Mehedi Hasan, a software engineer and University of Dhaka IT student who builds responsive web apps and solves programming challenges.",
  },
  contact: {
    path: "/contact",
    title: "Contact Mehedi Hasan | Frontend Software Engineer",
    description:
      "Contact Mehedi Hasan about frontend engineering, React projects or collaboration. Find his public email, phone number and social profiles here.",
  },
  projects: {
    "dailynews": {
      path: "/project/dailynews",
      title: "Daily News | Mehedi Hasan",
      description:
        "Explore Daily News, a React and Django REST news platform by Mehedi Hasan, with JWT authentication, content tools and responsive layouts for readers.",
      summary:
        "A news platform with React, Django REST APIs, JWT authentication, and responsive layouts.",
      keywords: ["React", "Django REST APIs", "JWT authentication", "Tailwind CSS"],
      liveUrl: "https://dailyneeews.netlify.app",
      repositoryUrl: "https://github.com/Mehedi-Hasan-18/Daily-News-Client",
    },
    "phimart": {
      path: "/project/phimart",
      title: "PhiMart | Mehedi Hasan",
      description:
        "Explore PhiMart, a React and Django REST e-commerce project by Mehedi Hasan, with product listings, JWT authentication and an admin dashboard.",
      summary:
        "An e-commerce platform with React, Django REST APIs, product listings, authentication, and an admin dashboard.",
      keywords: ["React", "Django REST APIs", "JWT authentication", "Tailwind CSS"],
      liveUrl: "https://phiimart.netlify.app",
      repositoryUrl: "https://github.com/Mehedi-Hasan-18/PhiMart-Client",
    },
    "tripbooking-public": {
      path: "/project/tripbooking-public",
      title: "tripbooking.ai | Mehedi Hasan",
      description:
        "See Mehedi Hasan's frontend work on tripbooking.ai, a public hotel booking platform built with React, TypeScript, Tailwind CSS and REST APIs.",
      summary:
        "Frontend development for a public hotel booking platform using React, TypeScript, Tailwind CSS, and REST APIs.",
      keywords: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://tripbooking.ai",
      // TODO: Add a public repository URL if one is available.
    },
    "syncme": {
      path: "/project/syncme",
      title: "SyncMe | Mehedi Hasan",
      description:
        "Explore SyncMe, Mehedi Hasan's peer-to-peer shared clipboard project, using React, TypeScript, encrypted WebRTC, Supabase and Yjs, with secure device pairing.",
      summary:
        "A peer-to-peer shared clipboard using React, TypeScript, WebRTC, Supabase, and Yjs.",
      keywords: ["React", "TypeScript", "WebRTC", "Supabase", "Yjs"],
      liveUrl: "https://sync-me-theta.vercel.app",
      repositoryUrl: "https://github.com/Mehedi-Hasan-18/SyncMe",
    },
  },
};

export const SITE_ROUTES = [
  PAGE_SEO.home,
  PAGE_SEO.about,
  PAGE_SEO.contact,
  ...Object.values(PAGE_SEO.projects),
];

export function getPageSeo(path) {
  return SITE_ROUTES.find((page) => page.path === path);
}
