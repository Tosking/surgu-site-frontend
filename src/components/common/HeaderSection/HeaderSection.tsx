import React from "react";
import { cn } from "@/src/lib/cn";
const colors = {
  white:
    "text-sur-header-section--white border-b border-sur-header-section--white",
  black:
    "text-sur-header-section--black border-b border-sur-header-section--black",
};
const HeaderSection: React.FC<{
  title: string;
  className?: string;
  color?: string;
}> = ({
  title,
  className,
  color,
}: {
  title: string;
  className?: string;
  color?: string;
}) => {
  return (
    <h1
      className={cn(
        className,
        colors[color || "white"],
        "uppercase font-third text-[72px]   leading-[normal] pb-[16px]  font-bold"
      )}
    >
      {title}
    </h1>
  );
};

export default HeaderSection;
