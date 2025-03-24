import { SECTIONS } from "@/src/constants/navbarContacts";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import dynamic from "next/dynamic";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
const DynamicComponents = {
  phonedirectory: dynamic(
    () => import("@/src/components/common/Contacts/PhoneDirectory"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
  corps: dynamic(() => import("@/src/components/common/Contacts/Corps"), {
    ssr: true,
  }),
};

export default async function SectionPage({
  params,
}: {
  params: { section: keyof typeof DynamicComponents };
}) {
  const { section } = await params;
  const Component = DynamicComponents[section] || null;

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-[65px]">
          <NavbarSections
            href="/contacts"
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
