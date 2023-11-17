export type NavLinkProps = {
  href: string;
  label: string;
  isLogo?: boolean;
};

type LinkItem = NavLinkProps;

export const navLinks: LinkItem[] = [
  { href: "/", label: "venue" },
  { href: "/", label: "catering" },
  { isLogo: true, href: "/logo-link", label: "RLM Logo" },
  { href: "/", label: "florals" },
  { href: "/", label: "our story" },
];
