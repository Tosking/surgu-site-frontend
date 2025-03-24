import Section from "@/src/components/semantic/Section";
import Container from "@/src/components/common/Container/Container";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import { SECTIONS } from "@/src/constants/navbarScience";
import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";

export default function ScienceLayout({ children }) {
  return (
    <main className=" ">
      <Section className="flex items-center justify-center relative bg-[url('../public/surgu.png')] bg-no-repeat bg-cover  bg-center min-h-[590px]">
        <div className="bg-[#05050566] absolute inset-0 opacity-[0.9]"></div>
        <Container>
          <div className="flex justify-center items-center z-10">
            <h1 className="text-[#E6E6E6] text-[96px] font-bold italic uppercase">
              Наука
            </h1>
          </div>
        </Container>
      </Section>
      <Section className="mt-[50px] mb-[50px] text-black">
        <Container>
          <div className="flex flex-col gap-[40px]">
            <NavbarSections href="/science" sections={SECTIONS} />
            {children}
          </div>
        </Container>
      </Section>
    </main>
  );
}
