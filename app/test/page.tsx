"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function page() {
  gsap.registerPlugin(ScrollTrigger);
  const squareRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: squareRef.current,
      start: "top center",
      end: "bottom center",
      markers: true,
      onEnter: () => {
        gsap.to(squareRef.current, {
          x: 100,
          duration: 1,
        });
      }
      
    });
  }, []);
  return (
    <div className="relative h-screen w-full">
      <div ref={squareRef} className="absolute top-[50vh] h-20 w-20 bg-green-300"></div>
    </div>
  );
}
