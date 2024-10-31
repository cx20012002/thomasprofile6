import React, { createElement, ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface InitialProps {
  opacity?: number;
  x?: number;
  y?: number;
  duration?: number;
  scale?: number;
}

interface AnimateProps extends InitialProps {
  duration?: number;
}

interface AnimatedComponentProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  as?: string;
  initial?: InitialProps;
  animate?: AnimateProps;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  className,
  as = "div",
  initial = { opacity: 0, y: 200 },
  animate = { opacity: 1, y: 0, duration: 0.7 },
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.fromTo(
        containerRef.current,
        {
          ...initial,
        },
        {
          scrollTrigger: { trigger: containerRef.current },
          ...animate,
        },
      );
    },
    { scope: containerRef },
  );
  return createElement(as, { ref: containerRef, className }, children);
};

const animated = {
  div: (props: AnimatedComponentProps) => <AnimatedComponent {...props} as="div" />,
  section: (props: AnimatedComponentProps) => <AnimatedComponent {...props} as="section" />,
};

export default animated;
