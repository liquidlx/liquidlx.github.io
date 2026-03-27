export type SideProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  badge?: string;
  /** Optional screenshot in /public — e.g. "/projects/pocket-dev.png" */
  imageSrc?: string;
  /** Muted badge background (hex) */
  accent: string;
  preview: "pocket" | "reforge";
};

export const sideProjects: SideProject[] = [
  {
    id: "pocket-dev",
    name: "Pocket Dev",
    tagline: "Ship from anywhere.",
    description:
      "AI coding agents on your phone — manage features and fixes without living in the repo.",
    url: "https://pocket-dev-virid.vercel.app/",
    badge: "Beta",
    accent: "#ecfdf5",
    preview: "pocket",
  },
  {
    id: "reforge",
    name: "Reforge",
    tagline: "Before you get paged, we're already on it.",
    description:
      "The moment an incident fires, Reforge starts working — gathering context, generating a fix, asking the right questions. You step in to review, not to start from scratch.",
    url: "https://reforge-frontend.vercel.app/",
    accent: "#f4f4f5",
    preview: "reforge",
  },
];
