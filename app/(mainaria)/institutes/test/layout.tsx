import { SECTIONS } from "@/src/constants/navbarInstitutes";
import NavbarSections from "@/src/components/features/NavbarInstitutes/NavbarSections";
export default function TestLayout({ children }) {
  return (
    <div>
      <NavbarSections href="/institutes/test" sections={SECTIONS} />
      {children}
    </div>
  );
}
