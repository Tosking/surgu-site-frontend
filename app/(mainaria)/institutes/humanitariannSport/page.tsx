import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import { SECTIONS } from "@/src/constants/navbarInstitutes";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";

export default async function HumanPage() {
  return (
    <Section className=" pt-[81px]">
      <Container>
        <div className="flex flex-col  mb-[10px]  ">
          <NavbarSections
            href="/institutes/humanitariannSport"
            sections={SECTIONS}
          />
          <AnimatedSection key="default">
            <div className="text-xl text-sur-footer-dark">Выберите раздел</div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
