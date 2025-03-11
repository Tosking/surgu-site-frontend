import React from "react";

const Table: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <table className={className}>{children}</table>;
};

export default Table;
