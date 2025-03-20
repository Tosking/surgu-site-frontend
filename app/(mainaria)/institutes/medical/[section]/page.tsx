import dynamic from "next/dynamic";
import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import { SECTIONS } from "@/src/constants/navbarInstitutes";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
const DynamicComponents = {
  about: dynamic(
    () => import("@/src/components/common/Institutes/Polytech/About"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
  directions: dynamic(
    () => import("@/src/components/common/Institutes/Directions"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
};

export default async function SectionPage({
  params,
}: {
  params: { section: keyof typeof DynamicComponents };
}) {
  const { section } = await params;
  const Component = DynamicComponents[section] || null;

  return (
    <Section className="pt-[81px]">
      <Container>
        <div className="flex flex-col gap-[65px]">
          <NavbarSections
            href="/institutes/medical"
            activeSection={section}
            sections={SECTIONS}
          />
          <AnimatedSection>
            {Component ? <Component /> : "Выберите раздел"}
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
