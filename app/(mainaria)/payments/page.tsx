import { SECTIONS } from "@/src/constants/navbarPayments";
import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
export default function PaymentPage() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-[65px]">
          <NavbarSections href="/payments" sections={SECTIONS} />
          <AnimatedSection key="default">
            <div className="text-xl text-sur-footer-dark">Выберите раздел</div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
