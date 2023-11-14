import { ChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";

type SectionProps = ChildrenProps & React.HTMLAttributes<HTMLElement>;

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn("py-28", className)} {...props}>
      {children}
    </section>
  );
};
