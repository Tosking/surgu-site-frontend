import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import Section from "@/src/components/semantic/Section";
import { SECTIONS } from "@/src/constants/navbarPayments";
export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Section className="flex items-center justify-center py-[89px]">
        <h1 className="uppercase font-semibold text-[96px] text-sur-footer-dark italic">
          Оплата услуг
        </h1>
      </Section>
      <Section className="mt-[50px] mb-[50px] text-black">
        <Container>
          <div className="flex flex-col gap-[40px]">
            <NavbarSections href="/payments" sections={SECTIONS} />
            {children}
          </div>
        </Container>
      </Section>
    </main>
  );
}
