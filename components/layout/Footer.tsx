import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { footerLinks } from "@/lib/data/footerLinks";
import { ChildrenProps } from "@/lib/types";
import Image from "next/image";

type FooterLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const FooterCol = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col justify-end gap-2">{children}</div>;
};

const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <a className="text-3xl text-white" {...props}>
      {children}
    </a>
  );
};

const FooterLinkHeader = ({ children }: ChildrenProps) => {
  return <div className="text-3xl font-light text-white/60">{children}</div>;
};

const FooterLinksWrapper = () => {
  return (
    <Section className="bg-brandingBlue-900">
      <Container>
        <div className="grid grid-cols-4">
          {footerLinks.map((col, idx) => (
            <FooterCol key={idx}>
              {col.title && <FooterLinkHeader>{col.title}</FooterLinkHeader>}
              {col.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterCol>
          ))}
          <div className="flex flex-col justify-end gap-8 text-white">
            <div className="space-y-2">
              <div>Have Questions?</div>
              <ButtonLink href="/" color="light" width="full">
                contact us
              </ButtonLink>
            </div>
            <div className="space-y-2">
              <div>Have Questions?</div>
              <ButtonLink href="/" color="light" width="full">
                contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const Footer = () => {
  return (
    <>
      <Section className="bg-brandingBlue-900">
        <Container className="pb-9">
          <div className="space-y-9 text-center">
            <div className="mx-auto max-w-2xl space-y-2">
              <Heading level="h2" className="text-white">
                Available now in California.
              </Heading>
              <div className="text-4xl font-light text-brandingGrey-400">
                Starting at $279k or $1,671/mo including installation.
              </div>
            </div>
            <ButtonLink href="/">schedule a tour</ButtonLink>
            <div className="text-sm">
              <div className="font-light text-brandingGrey-400">
                Not in California?
              </div>
              <div className="text-white">Tell us where to expand next</div>
            </div>
          </div>
        </Container>
        <Image src="/footer-sparkle.png" alt="" width={1282} height={647} />
      </Section>
      <FooterLinksWrapper />
      <div className="bg-brandingBlue-900">
        <Container>
          <div className="flex justify-between py-8 text-sm text-white">
            <div>© 2023 RLM Affairs LLC.</div>
            <div className="flex gap-8">
              <div>Privacy policy</div>
              <div>Terms of service</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
