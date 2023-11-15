import { Container } from "@/components/Container";
import { BodyText } from "@/components/ui/BodyText";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

//TODO: make reuseable with props and switching sides

export const FeatSection = () => {
  return (
    <Section>
      <Container className="grid grid-cols-12 items-center gap-12">
        <div className="col-span-8">
          <Image
            src="/venue-feat.png"
            alt=""
            height={574}
            width={787}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-4 space-y-8">
          <Heading level="h2">Venue Feature</Heading>
          <BodyText>
            Floral Showroom: RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an
            entire Gala every bloom is hand picked and sourced eco friendly. Our
            retail storefront offers modern & unique items keeping everyone in
            mind
          </BodyText>
          <ButtonLink>schedule a tour</ButtonLink>
        </div>
      </Container>
    </Section>
  );
};
