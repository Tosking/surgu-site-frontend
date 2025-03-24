import React from "react";
import { cn } from "@/src/lib/cn";
interface INewsCardProps {
  children: React.ReactNode;
  className?: string;
}
const NewsCard = ({ className, children }: INewsCardProps) => {
  return (
    <div
      className={cn(
        className,
        "max-w-[470px] flex flex-col  flex-[1] basis-[33.3333%] shrink-0 p-[15px]"
      )}
    >
      {children}
    </div>
  );
};

export default NewsCard;
