import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="container mx-auto px-[16px] ">{children}</div>;
};

export default Container;
