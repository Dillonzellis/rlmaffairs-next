import { ChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";

type BodyTextProps = ChildrenProps & React.HTMLAttributes<HTMLElement>;

export const BodyText = ({ children, className, ...props }: BodyTextProps) => {
  return (
    <p className={cn("leading-8", className)} {...props}>
      {children}
    </p>
  );
};
