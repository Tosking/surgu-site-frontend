import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function createWrapperElementAndAppendToBody(wrapperId: string) {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const Portal: React.FC<{
  children: React.ReactElement;
  wrapperId?: string;
}> = ({
  children,
  wrapperId = 'portal',
}: {
  children: React.ReactElement;
  wrapperId?: string;
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperElementAndAppendToBody(wrapperId);
    }
    setWrapperElement(element!);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
