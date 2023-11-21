export type NavLinkProps = {
  href: string;
  label: string;
  isLogo?: boolean;
};

type LinkItem = NavLinkProps;

export const navLinks: LinkItem[] = [
  { href: "/venue", label: "venue" },
  { href: "/catering", label: "catering" },
  { isLogo: true, href: "/", label: "RLM Logo" },
  { href: "/florals", label: "florals" },
  { href: "/our-story", label: "our story" },
];
