"use client";
import React from "react";
import Nav from "../../semantic/Nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavbarSections = ({
  href,
  sections,
}: {
  href: string;
  sections: { name: string; href: string }[];
}) => {
  const pathname = usePathname();

  return (
    <Nav className="flex flex-wrap gap-[16px] pb-[16px] border-b border-sur-footer-dark ">
      {sections.map((section, index) => (
        <Link
          key={index}
          href={`${href ?? ""}/${section.href}`}
          className={` ${
            pathname.includes(section.href)
              ? "bg-sur-footer-dark text-white"
              : "bg-transparent text-black border border-sur-footer-dark"
          }  italic text-[18px] px-[24px] py-[9px] rounded-[10px]`}
        >
          {section.name}
        </Link>
      ))}
    </Nav>
  );
};

export default NavbarSections;
