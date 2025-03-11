import React from "react";

const TableCell: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return <td className={className}>{children}</td>;
};

export default TableCell;
