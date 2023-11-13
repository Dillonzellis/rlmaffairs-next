import { ChildrenProps } from "@/lib/types";

export const Section = ({ children }: ChildrenProps) => {
  return <section className="py-28">{children}</section>;
};
