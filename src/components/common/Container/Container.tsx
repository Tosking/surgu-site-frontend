import { cn } from "@/src/lib/cn";
import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container mx-auto px-[16px] z-10 ", className)}>
      {children}
    </div>
  );
};

export default Container;
