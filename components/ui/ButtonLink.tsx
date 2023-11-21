import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

type ButtonLinkVariants = VariantProps<typeof ButtonLinkVariants>;

type ButtonLinkProps = ButtonLinkVariants & {
  href: string;
  children: string;
  className?: string;
  isExternal?: boolean;
};

const ButtonLinkVariants = cva(
  "inline-flex rounded-lg px-5 py-3 hover:shadow-lg text-lg capitalize shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300",
  {
    variants: {
      color: {
        dark: "bg-brandingGreen-400 text-slate-50 hover:bg-brandingGreen-300",
        light: "bg-slate-50 text-black",
      },
      width: {
        full: "w-full justify-center",
      },
    },
    defaultVariants: {
      color: "dark",
    },
  },
);

export const ButtonLink = ({
  children,
  href,
  color,
  width,
  className,
  isExternal,
}: ButtonLinkProps) => {
  const commonClass = cn(ButtonLinkVariants({ color, width }), className);

  return isExternal ? (
    <a
      href={href}
      className={commonClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={commonClass}>
      {children}
    </Link>
  );
};
