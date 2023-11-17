import Image from "next/image";
import Link from "next/link";

// TODO: adjust logo quality

type NavLinkProps = {
  href: string;
  label: string;
  isLogo?: boolean;
};

type LinkItem = NavLinkProps;

const links: LinkItem[] = [
  { href: "/", label: "venue" },
  { href: "/", label: "catering" },
  { isLogo: true, href: "/logo-link", label: "RLM Logo" },
  { href: "/", label: "florals" },
  { href: "/", label: "our story" },
];

const NavLink = ({ href, label }: NavLinkProps) => (
  <li>
    <Link href={href} className="text-lg font-medium capitalize">
      {label}
    </Link>
  </li>
);

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-center gap-8">
          {links.map((link) =>
            link.isLogo ? (
              <li key="logo">
                <Link href={link.href}>
                  <Image
                    src="/rlmaff-logo-green.png"
                    alt={link.label}
                    height={123}
                    width={124}
                  />
                </Link>
              </li>
            ) : (
              <NavLink key={link.label} {...link} />
            ),
          )}
        </ul>
      </nav>
    </header>
  );
};
