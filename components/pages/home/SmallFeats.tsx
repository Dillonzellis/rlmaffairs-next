import { Container } from "@/components/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

// TODO: make reusuable comps with props and alternating colors
// TODO: fix opacity with bg color opacity

const Feat = () => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-8 rounded-xl bg-brandingGreen-400 p-4 text-white opacity-80">
        <div>
          <div className="text-lg">Visit us in Gainesville</div>
          <div className="flex items-center gap-2 text-xl">
            Book a Tour{" "}
            <span>
              <BsArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
      <Image
        src="/venue-feature-sm.png"
        alt=""
        height={446}
        width={556}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export const SmallFeats = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-center gap-8">
          <Feat />
          <Feat />
        </div>
      </Container>
    </Section>
  );
};
