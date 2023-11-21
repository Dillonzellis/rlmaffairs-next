import { Container } from "@/components/Container";
import { Section } from "@/components/ui/Section";

export default function VenuePage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-span-4">text</div>
            <div className="col-span-8">Image</div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
