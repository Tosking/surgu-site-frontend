"use client";
import React, { useId } from "react";
import { usePathname } from "next/navigation";
import type { ListFiles } from "@/src/types/list";
import Sidebar from "../../common/Sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";
import PDF from "@/public/pdf.svg";
interface ISidebarFilesProps {
  list: ListFiles;
}
const SidebarFiles = ({ list }: ISidebarFilesProps) => {
  const pathname = usePathname();
  const id = useId();
  return (
    <Sidebar className="flex flex-col items-start bg-white rounded-[10px] gap-[8px]">
      {list.map((item, index) => (
        <Link
          className="max-w-full overflow-hidden flex gap-[16px]"
          href={item.href}
          key={`${id}-${index}`}
        >
          <Image src={PDF} alt="" />
          <p className="flex flex-col gap-[8px] text-[#3C3D41] whitespace-nowrap text-ellipsis overflow-hidden">
            <span className="font-medium text-ellipsis overflow-hidden">
              {item.text}
            </span>
            <span className="text-[#B0B1B6]">{item.size} КБ</span>
          </p>
        </Link>
      ))}
    </Sidebar>
  );
};

export default SidebarFiles;
