import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "UXArchitect Blog",
  EMAIL: "hello@uxarchitect.co",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "UX Architect — AI-Powered UX Design Strategies & Processes",
  DESCRIPTION: "Practical UX design frameworks, AI workflow optimization tips, and tactical guides for modern UX designers. Learn how to integrate AI into your design process effectively.",
  IMAGE: "/og-home.jpg",
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
    HREF: "https://twitter.com/uxarchitect_",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/uxarchitect"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/company/uxarchitect"
  },
  {
    NAME: "dribbble",
    HREF: "https://dribbble.com/uxarchitect"
  }
];
