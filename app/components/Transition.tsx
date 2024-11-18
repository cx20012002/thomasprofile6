"use client";

import { ReactLenis } from "lenis/react";

export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
