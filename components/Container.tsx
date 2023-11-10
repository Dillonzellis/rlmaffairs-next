import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

type ContainerVariants = VariantProps<typeof ContainerVariants>;

type ContainerProps = HTMLAttributes<HTMLDivElement> & ContainerVariants;

const ContainerVariants = cva("mx-auto", {
  variants: {
    size: {
      full: "w-full",
      wide: "max-w-[1920px]",
      regular: "max-w-[1200px]",
    },
  },
  defaultVariants: {
    size: "regular",
  },
});

export const Container = ({
  children,
  className,
  size,
  ...props
}: ContainerProps) => {
  return (
    <div className={cn(ContainerVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
};
