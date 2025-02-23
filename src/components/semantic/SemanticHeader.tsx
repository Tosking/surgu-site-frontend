import React, { HTMLAttributes } from "react";

const SemanticHeader = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <header role="banner" {...props}>
    {children}
  </header>
);
export default SemanticHeader;
