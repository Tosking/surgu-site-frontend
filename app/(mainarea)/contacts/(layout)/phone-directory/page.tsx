import PhoneDirectory from "@/src/components/common/Contacts/PhoneDirectory";
import SearchInput from "@/src/components/common/SearchInput/SearchInput";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import SidebarFiles from "@/src/components/features/SidebarFiles/SidebarFiles";

import Section from "@/src/components/semantic/Section";
import { SIDEBAR_FILES } from "@/src/constants/sidebarContacts";

export default function Page() {
  return (
    <AnimatedSection>
      <Section className="flex items-start gap-[25px] ">
        <SidebarFiles list={SIDEBAR_FILES} />
        <div className="flex flex-1 flex-col gap-[88px]">
          <SearchInput />
          <PhoneDirectory />
        </div>
      </Section>
    </AnimatedSection>
  );
}
