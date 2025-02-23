import React, { HTMLAttributes } from "react";

const Nav = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
  <nav role="navigation" {...props}>
    {children}
  </nav>
);
export default Nav;
