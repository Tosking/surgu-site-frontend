import React from "react";

const TableHeader: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <thead className={className}>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
