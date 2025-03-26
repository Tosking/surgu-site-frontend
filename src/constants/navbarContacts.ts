import PhoneDirectory from "../components/common/Contacts/PhoneDirectory";
import { ReactNode } from "react";

type Section = {
  href: string;
  name: string;
  component?: ReactNode;
};

export const SECTIONS: Section[] = [
  {
    href: "corps",
    name: "Kopnyca",
  },
  {
    href: "phone-directory",
    name: "Телефонный справочник СурГУ",
  },
];
