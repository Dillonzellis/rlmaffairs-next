import { Section } from "@/components/ui/Section";
import { awards } from "@/lib/data/marqueeAwards";
import Image from "next/image";
import Marquee from "react-fast-marquee";

//TODO: img quality
//TODO add award imgs

export const MarqueeSection = () => {
  return (
    <Section>
      <div className="mx-auto max-w-[800px] text-center text-3xl capitalize">
        were proud to partner with leading organizations and receive top
        industry accolades
      </div>
      <Image
        src="/leaves-1.png"
        alt=""
        width={140}
        height={88}
        className="mx-auto"
      />
      <Marquee pauseOnHover pauseOnClick>
        <div className="flex justify-center gap-8">
          {awards.map((award, idx) => (
            <Image
              key={idx}
              src={award.src}
              alt={award.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </Marquee>
    </Section>
  );
};
