"use client";

import { Transition } from "react-transition-group";
import { ReactNode, useRef } from "react";

const transitionStyles: any = {
  entering: { height: "100%", opacity: 1 },
  entered: { height: "100%", opacity: 1 },
  exiting: { height: 0, opacity: 0 },
  exited: { height: 0, opacity: 0 },
};

const defaultStyle = {
  transition: `all 200ms ease-in-out`,
};

export default function Modal({
  isOpen,
  children,
  className,
}: {
  isOpen: boolean;
  children?: ReactNode;
  className: string;
}) {
  const nodeRef = useRef(null);
  return (
    <Transition in={isOpen} timeout={100} unmountOnExit nodeRef={nodeRef}>
      {(state) => {
        return (
          <div className={className} ref={nodeRef} style={{ ...transitionStyles[state], ...defaultStyle }}>
            {children || "Make some content here"}
          </div>
        );
      }}
    </Transition>
  );
}
