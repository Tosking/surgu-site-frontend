import React, { HTMLAttributes } from "react";

const Footer = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
  <footer role="contentinfo" {...props}>
    {children}
  </footer>
);
export default Footer;
