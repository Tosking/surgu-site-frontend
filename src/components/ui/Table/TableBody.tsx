import React from "react";

const TableBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return <tbody className={className}>{children}</tbody>;
};

export default TableBody;
