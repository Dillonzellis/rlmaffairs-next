import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

type BodyTextVariants = VariantProps<typeof BodyTextVariants>;

type BodyTextProps = BodyTextVariants & React.HTMLAttributes<HTMLElement>;

const BodyTextVariants = cva("", {
  variants: {
    size: {
      normal: "",
      large: "text-lg",
    },
    leading: {
      none: "",
      regular: "leading-8",
      large: "",
    },
  },
  defaultVariants: {
    size: "normal",
    leading: "regular",
  },
});

export const BodyText = ({
  children,
  className,
  size,
  leading,
  ...props
}: BodyTextProps) => {
  return (
    <p
      className={cn(BodyTextVariants({ size, leading }), className)}
      {...props}
    >
      {children}
    </p>
  );
};
