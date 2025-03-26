import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import Container from "@/src/components/common/Container/Container";
import Section from "@/src/components/semantic/Section";
import { SECTIONS } from "@/src/constants/navbarScience";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <Section className="mt-[50px] mb-[50px] text-black">
        <Container>
          <div className="flex flex-col gap-[40px]">
            <NavbarSections href="/science" sections={SECTIONS} />
            <AnimatedSection>{children}</AnimatedSection>
          </div>
        </Container>
      </Section>
    </Section>
  );
}
