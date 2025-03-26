import React from "react";
import { cn } from "@/src/lib/cn";
import Aside from "@/src/components/ui/Aside/Aside";
interface ISidebarProps {
  children: React.ReactNode;
  className?: string;
}
const Sidebar = ({ children, className }: ISidebarProps) => {
  return (
    <Aside className={cn(className, "max-w-[460px] p-[24px]")}>
      {children}
    </Aside>
  );
};

export default Sidebar;
