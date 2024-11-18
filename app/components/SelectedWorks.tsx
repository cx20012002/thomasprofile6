"use client";

import Link from "next/link";
import Card from "@/components/Card";
import { selectedWorks } from "@/utils/content";
import Image from "next/image";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function SelectedWorks() {
  return (
    <section className={"section-container flex w-full flex-col items-center gap-10 py-10 md:gap-20 md:py-20"}>
      <AnimatedComponent.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className={"flex w-full flex-col items-center gap-5 text-center md:max-w-[800px]"}
      >
        <small className={"small-title"}>Selected Works</small>
        <h2 className={"md:sub-title text-[22px] font-bold leading-[1.2em]"}>
          Helping brands achieve sustainable results
        </h2>
        <p className={"body-text w-full md:max-w-[624px]"}>
          Each project represents a unique challenge and opportunity to apply my skills and creativity.
        </p>
      </AnimatedComponent.div>
      <main className={"flex w-full flex-col gap-5 lg:gap-20"}>
        {selectedWorks.map((item, index) => (
          <AnimatedComponent.div key={index} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
            <Card key={index} tags={item.tags} title={item.title} imgSrc={item.imgSrc} src={item.src} />
          </AnimatedComponent.div>
        ))}
      </main>
      <div className={"flex w-full items-center justify-center"}>
        <Link className={"flex items-center gap-3 rounded-full border-2 border-primary px-6 py-3"} href={"/cases"}>
          All case studies
          <Image src={"/arrow-icon-dark.svg"} alt={""} width={0} height={0} className={"w-4 -rotate-45"} />
        </Link>
      </div>
    </section>
  );
}
