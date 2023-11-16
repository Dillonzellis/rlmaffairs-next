import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/Container";
import { BodyText } from "@/components/ui/BodyText";
import Image from "next/image";

const BorderDiv = () => {
  return (
    <div className="max-w-[112px] flex-1 border-t-2 border-gray-300"></div>
  );
};

export const CTAHome = () => {
  return (
    <Section>
      <Container>
        <div className="mx-auto text-center">
          <Heading level="h2">Elevate Your Experience</Heading>
          <div className="flex items-center justify-center">
            <BorderDiv />
            <div className="mx-4">
              <Image src="/leaves-1.png" alt="" height={64} width={102} />
            </div>
            <BorderDiv />
          </div>
          <BodyText className="mx-auto max-w-lg">
            Discover a realm where intricate design meets natural beauty. Every
            corner of RLM Affairs is meticulously crafted, ensuring your event
            is nothing short of extraordinary.
          </BodyText>
        </div>
      </Container>
    </Section>
  );
};
