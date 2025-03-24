import { ReactNode } from "react";

type Section = {
  href: string;
  name: string;
  component?: ReactNode;
};

export const SECTIONS: Section[] = [
  {
    href: "education",
    name: "Образовательные услуги",
  },
  {
    href: "dorms",
    name: "Проживание в общежитии",
  },
  {
    href: "library",
    name: "Библиотечные услуги",
  },
  {
    href: "additional",
    name: "Дополнительные услуги",
  },
  {
    href: "documents",
    name: "Документы",
  },
];
