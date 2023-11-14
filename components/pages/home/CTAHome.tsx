import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/Container";
import { BodyText } from "@/components/ui/BodyText";

//TODO: fix hr with image

export const CTAHome = () => {
  return (
    <Section>
      <Container>
        <div className="mx-auto space-y-4 text-center">
          <Heading level="h2">Elevate Your Experience</Heading>
          <div>hr</div>
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
