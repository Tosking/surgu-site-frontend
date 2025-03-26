import React from "react";
interface IAsideProps {
  children: React.ReactNode;
  className?: string;
}
const Aside = ({ children, className }: IAsideProps) => {
  return <aside className={className}>{children}</aside>;
};

export default Aside;
