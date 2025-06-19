import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "kr-2003",
  DESCRIPTION: "Welcome to Abhinav Kumar's personal blog and website",
  AUTHOR: "Abhinav Kumar",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION:
    "My work and experiences.",
};

// Videos Page
export const VIDEOS: Page = {
  TITLE: "Videos",
  DESCRIPTION:
    "A selection of talks and tutorials given at conferences and published on YouTube.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing about Jupyter, Python, and more.",
};

// Game Jams Page
export const GAME_JAMS: Page = {
  TITLE: "Game Jams",
  DESCRIPTION: "The game jams I participated in.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "kr-2003",
    HREF: "https://github.com/kr-2003",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Abhinav Kumar",
    HREF: "https://www.linkedin.com/in/abhinavkumar2105/",
  },
  {
    NAME: "X",
    ICON: "twitter-x",
    TEXT: "Abhinav Kumar",
    HREF: "https://x.com/Abhinav59318068",
  },
  {
    NAME: "E-Mail",
    ICON: "email",
    TEXT: "Abhinav Kumar",
    HREF: "mailto:abhinavdnpiasb@gmail.com"
  }
];
