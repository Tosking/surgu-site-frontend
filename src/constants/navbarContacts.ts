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
    component: null, // или импортируйте соответствующий компонент
  },
  {
    href: "phonedirectory",
    name: "Телефонный справочник СурГУ",
  },
];
