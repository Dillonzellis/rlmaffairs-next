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

//TODO: add hover animations
//TODO: add white variance
//TODO: add shadows

const ButtonLinkVariants = cva(
  "inline-flex rounded-lg px-5 py-3 text-lg font-medium capitalize shadow-md",
  {
    variants: {
      color: {
        dark: "bg-brandingGreen-400 text-white ",
        light: "bg-white text-black",
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
    <a href={href} className={commonClass}>
      {children}
    </a>
  ) : (
    <Link href={href} className={commonClass}>
      {children}
    </Link>
  );
};
