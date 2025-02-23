// components/semantic/Section.tsx
import React, { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  ariaLabel?: string;
  role?: string;
}

const Section = ({
  children,
  ariaLabel = "Content section",
  role = "region",
  ...props
}: SectionProps) => (
  <section role={role} aria-label={ariaLabel} {...props}>
    {children}
  </section>
);

export default Section;
