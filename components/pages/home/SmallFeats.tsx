import { Container } from "@/components/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

//TODO: add shadows
//TODO: add hover animations

type FeatProps = {
  title: string;
  linkText: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
};

const Feat = ({ title, linkText, imgSrc, imgAlt, bgColor }: FeatProps) => {
  return (
    <div className="relative">
      <div
        className={`absolute left-8 top-8 rounded-xl ${bgColor} p-4 text-white backdrop-blur-sm`}
      >
        <div>
          <div className="text-lg font-light text-white/70">{title}</div>
          <div className="flex items-center gap-2 text-xl">
            {linkText}
            <span>
              <BsArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
      <Image
        src={imgSrc}
        alt={imgAlt}
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
          <Feat
            title="Visit us in Gainesville"
            linkText="Book a Tour"
            imgSrc="/venue-feature-sm.png"
            imgAlt=""
            bgColor="bg-brandingGold-400/80 "
          />
          <Feat
            title="Renowned Catering"
            linkText="Have a Taste"
            imgSrc="/catering-feat-sm.png"
            imgAlt=""
            bgColor="bg-brandingGreen-400/80 "
          />
        </div>
      </Container>
    </Section>
  );
};
