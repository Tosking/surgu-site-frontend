"use client";
import React, { useId } from "react";
import { usePathname } from "next/navigation";
import type { List } from "@/src/types/list";
import Sidebar from "../../common/Sidebar/Sidebar";
import Link from "next/link";

interface ISidebarNavigationProps {
  list: List;
}
const SidebarNavigation = ({ list }: ISidebarNavigationProps) => {
  const pathname = usePathname();
  const id = useId();
  return (
    <Sidebar className="flex flex-col bg-white rounded-[30px] gap-[8px]">
      {list.map((item, index) => (
        <Link
          className={
            pathname.includes(item.href)
              ? "border-sur-footer-dark bg-sur-footer-dark text-white rounded-[10px] px-[16px] py-[10px]"
              : "hover:bg-sur-footer-dark hover:text-white transition-colors text-[#606266] duration-200 rounded-[10px] px-[16px] py-[10px]"
          }
          href={item.href}
          key={`${id}-${index}`}
        >
          {item.text}
        </Link>
      ))}
    </Sidebar>
  );
};

export default SidebarNavigation;
