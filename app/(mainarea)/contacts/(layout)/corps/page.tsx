import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import SidebarNavigation from "@/src/components/features/SidebarNavigation/SidebarNavigation";
import Section from "@/src/components/semantic/Section";
import { SIDEBAR_CONTACTS } from "@/src/constants/sidebarContacts";
export default function Page() {
  return (
    <AnimatedSection>
      <Section className="text-black">
        <SidebarNavigation list={SIDEBAR_CONTACTS} />
      </Section>
    </AnimatedSection>
  );
}
