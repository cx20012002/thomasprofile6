"use client";

import AnimatedComponent from "@/components/AnimatedComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Banner() {
  return (
    <section className={"flex flex-col gap-20 overflow-hidden bg-primary py-10 md:py-20"}>
    <AnimatedComponent.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, duration: 0.5 }}
      className={"section-container flex flex-col gap-10 text-secondary"}
    >
      <div className="flex flex-col gap-3">
        <h1 className={"sub-title2"}>Contact</h1>
        <h5 className={"summary max-w-[1061px] text-secondary"}>
          I am eager to hear from you and discuss how my UI design expertise can help you achieve your business goals.
          Please contact me today to schedule a consultation.
        </h5>
      </div>

      <div className="relative w-full">
        <Link href="" className="flex gap-2 border-b border-[#4b4b4b] py-4">
          <Image src="/chain.svg" width={20} height={20} alt="Instagram" className="aspect-square w-5" />
          Dribble
        </Link>
        <Link href="" className="flex gap-2 border-b border-[#4b4b4b] py-4">
          <Image src="/chain.svg" width={20} height={20} alt="Instagram" className="aspect-square w-5" />
          Dribble
        </Link>
        <Link href="" className="flex gap-2 border-b border-[#4b4b4b] py-4">
          <Image src="/chain.svg" width={20} height={20} alt="Instagram" className="aspect-square w-5" />
          Dribble
        </Link>
      </div>
    </AnimatedComponent.div>
  </section>
  )
}
