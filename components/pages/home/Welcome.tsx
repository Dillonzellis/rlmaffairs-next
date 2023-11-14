import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { BodyText } from "@/components/ui/BodyText";
import Image from "next/image";

export const Welcome = () => {
  return (
    <Section>
      <Container className="flex items-center">
        <div className="flex max-w-prose flex-col gap-4">
          <Heading level="h1">
            Welcome to{" "}
            <span className="font-serif font-semibold text-brandingGold-400">
              RLM Affairs
            </span>
          </Heading>
          <div className="text-xl italic">
            Where love and celebration come together beautifully.
          </div>
          <hr className="max-w-xs" />
          <BodyText className="max-w-xl">
            Step into the world of RLM Affairs, from intimate celebrations to
            lavish receptions, our dedicated team crafts bespoke experiences,
            ensuring each moment is as unique as the celebration. Offering a
            curated suite of services from gourmet catering, exquisite florals,
            meticulous event planning, to creating magical receptions.
          </BodyText>
          <div>
            <ButtonLink>schedule a tour</ButtonLink>
          </div>
        </div>
        <div className="mx-auto">
          <Image
            src="/logo-gold.png"
            alt=""
            height={384}
            width={384}
            className="drop-shadow-sm"
          />
        </div>
      </Container>
    </Section>
  );
};
