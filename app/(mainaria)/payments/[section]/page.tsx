import dynamic from "next/dynamic";
import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import { SECTIONS } from "@/src/constants/navbarPayments";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
const DynamicComponents = {
  education: dynamic(
    () => import("@/src/components/common/Payments/Education"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
  dorms: dynamic(
    () => import("@/src/components/common/Payments/Dorms"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
  library: dynamic(
    () => import("@/src/components/common/Payments/Library"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
  additional: dynamic(
    () => import("@/src/components/common/Payments/Additional"),
    {
      ssr: true,
      loading: () => <div className="text-black">Loading...</div>,
    }
  ),
  documents: dynamic(
    () => import("@/src/components/common/Payments/Documents"),
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
            href="/payments"
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
