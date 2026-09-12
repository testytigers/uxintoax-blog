import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "UXintoax",
  EMAIL: "hello@uxintoax.com",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Signal vs Noise — the free AI book for UX designers",
  DESCRIPTION: "A free 11-chapter book for UX and product designers. Understand what AI is actually doing, so you stop guessing where you stand.",
  IMAGE: "/assets/signal-noise-cover.jpg",
};

export const BLOG: Metadata = {
  TITLE: "Blog — UX Design & AI Integration Strategies",
  DESCRIPTION: "In-depth articles on AI-powered UX design processes, tool recommendations, and workflow optimization for UX professionals.",
  IMAGE: "/og-blog.jpg",
};

export const WORK: Metadata = {
  TITLE: "Work Experience — UX Design Leadership",
  DESCRIPTION: "Professional experience and career highlights in UX design, design systems, and product strategy.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects — UX Case Studies & Design Systems",
  DESCRIPTION: "Selected UX projects, case studies, and design system work with detailed process documentation.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/uxintoax",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/uxintoax"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/company/uxintoax"
  },
  {
    NAME: "dribbble",
    HREF: "https://dribbble.com/uxintoax"
  }
];
