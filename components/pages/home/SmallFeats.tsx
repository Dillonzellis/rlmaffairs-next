import { Container } from "@/components/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type FeatProps = {
  title: string;
  linkText: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
};

const Feat = ({
  title,
  linkText,
  href,
  imgSrc,
  imgAlt,
  bgColor,
}: FeatProps) => {
  return (
    <div className="relative">
      <Link
        href={href}
        className={`absolute left-8 top-8 rounded-xl ${bgColor} p-4 text-slate-50 backdrop-blur-sm duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/30 hover:backdrop-blur-0`}
      >
        <div>
          <div className="text-lg font-light text-slate-50/70">{title}</div>
          <div className="flex items-center gap-2 text-xl">
            {linkText}
            <span>
              <BsArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
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
            href="/"
            imgSrc="/venue-feature-sm.png"
            imgAlt=""
            bgColor="bg-brandingGold-400/80 hover:bg-brandingGold-400"
          />
          <Feat
            title="Renowned Catering"
            linkText="Have a Taste"
            href="/"
            imgSrc="/catering-feat-sm.png"
            imgAlt=""
            bgColor="bg-brandingGreen-400/80 hover:bg-brandingGreen-400"
          />
        </div>
      </Container>
    </Section>
  );
};
