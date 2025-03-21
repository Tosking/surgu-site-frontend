import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
import { SECTIONS } from "@/src/constants/navbarInstitutes";

export default function TestPage({ children }) {
  return (
    <div>
      <AnimatedSection>{children}</AnimatedSection>
    </div>
  );
}
