import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import { SECTIONS } from "@/src/constants/navbarInstitutes";
export default function PolytechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-1 w-full  ">
      <Section className="w-full flex text-center justify-center items-center min-h-[590px] sur-su-bg-polytech">
        <h1 className="font-bold text-[96px] uppercase">
          ПОЛИТЕХНИЧЕСКИЙ <br /> ИНСТИТУТ
        </h1>
      </Section>
      {children}
    </main>
  );
}
