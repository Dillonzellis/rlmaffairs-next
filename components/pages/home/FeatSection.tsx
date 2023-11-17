import { Container } from "@/components/Container";
import { BodyText } from "@/components/ui/BodyText";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

//TODO: img shadows

type FeatSectionProps = {
  imgLeft?: boolean;
  imgSrc: string;
  imgAlt: string;
  heading: string;
  body: string;
  linkLabel: string;
  link: string;
};

const ImgCol = ({
  imgSrc,
  imgAlt,
}: Pick<FeatSectionProps, "imgSrc" | "imgAlt">) => {
  return (
    <div className="col-span-8">
      <Image
        src={imgSrc}
        alt={imgAlt}
        height={574}
        width={787}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

const ContentCol = ({
  heading,
  body,
  linkLabel,
  link,
}: Pick<FeatSectionProps, "heading" | "body" | "linkLabel" | "link">) => {
  return (
    <div className="col-span-4 space-y-8">
      <Heading level="h2">{heading}</Heading>
      <BodyText>{body}</BodyText>
      <ButtonLink href={link}>{linkLabel}</ButtonLink>
    </div>
  );
};

export const FeatSection = ({
  imgLeft,
  imgSrc,
  imgAlt,
  heading,
  body,
  linkLabel,
  link,
}: FeatSectionProps) => {
  return (
    <Section>
      <Container className="grid grid-cols-12 items-center gap-12">
        {imgLeft ? (
          <>
            <ImgCol imgSrc={imgSrc} imgAlt={imgAlt} />
            <ContentCol
              heading={heading}
              body={body}
              linkLabel={linkLabel}
              link={link}
            />
          </>
        ) : (
          <>
            <ContentCol
              heading={heading}
              body={body}
              linkLabel={linkLabel}
              link={link}
            />
            <ImgCol imgSrc={imgSrc} imgAlt={imgAlt} />
          </>
        )}
      </Container>
    </Section>
  );
};
