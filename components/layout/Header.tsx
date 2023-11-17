import type { NavLinkProps } from "@/lib/data/navLinks";
import { navLinks } from "@/lib/data/navLinks";
import Image from "next/image";
import Link from "next/link";

// TODO: adjust logo quality

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
          {navLinks.map((link) =>
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
