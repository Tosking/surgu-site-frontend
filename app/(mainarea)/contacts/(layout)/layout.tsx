import Section from "@/src/components/semantic/Section";
import { SECTIONS } from "@/src/constants/navbarContacts";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-[40px]">
          <NavbarSections href="/contacts" sections={SECTIONS} />
          {children}
        </div>
      </Container>
    </>
  );
}
