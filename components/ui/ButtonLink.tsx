import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: string;
};

//TODO: add hover animations
//TODO: add white variance
//TODO: add shadows
//TODO: Link vs a tag

export const ButtonLink = ({ children, href }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-flex rounded-lg bg-brandingGreen-400 px-5 py-3 text-lg font-medium capitalize text-white shadow-md"
    >
      {children}
    </Link>
  );
};
