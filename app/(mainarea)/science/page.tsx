import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import { SECTIONS } from "@/src/constants/navbarScience";
export default function SciencePage() {
  return (
    <AnimatedSection>
      <Section className="mt-[50px] mb-[50px] text-black">
        <Container>
          <div className="flex flex-col gap-[40px]">
            <NavbarSections href="/science" sections={SECTIONS} />
            <AnimatedSection>Выберите раздел</AnimatedSection>
          </div>
        </Container>
      </Section>
    </AnimatedSection>
  );
}
