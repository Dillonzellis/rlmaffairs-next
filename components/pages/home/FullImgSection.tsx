import { Container } from "@/components/Container";
import { BodyText } from "@/components/ui/BodyText";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export const FullImgSection = () => {
  return (
    <Section>
      <div className="relative">
        <Image src="/floral-artist.png" alt="" height={724} width={1282} />
        <Container className="absolute left-8 top-1/2 -translate-y-1/2 space-y-6 rounded-xl bg-brandingGreen-400 p-4 text-white">
          <Heading level="h2">Floral Artist</Heading>
          <BodyText className="max-w-lg">
            RLM Affairs is a full-service florist serving North Georgia for 40
            years. Our award winning designers offer exquisite attention to
            detail. Whether it’s a single rose or decor for an entire Gala every
            bloom is hand picked and sourced eco friendly.
          </BodyText>
        </Container>
      </div>
    </Section>
  );
};
