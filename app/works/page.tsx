"use client";

import AnimatedComponent from "@/components/AnimatedComponent";
import { selectedWorks } from "@/utils/content";
import Card from "@/components/Card";

export default function Works() {
  return (
    <section className={"flex flex-col gap-20 overflow-hidden bg-primary py-10 md:py-20"}>
      <AnimatedComponent.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, duration: 0.5 }}
        className={"section-container flex flex-col gap-3"}
      >
        <h1 className={"sub-title2"}>Projects</h1>
        <h5 className={"summary max-w-[1061px] text-secondary"}>
          I'm passionate about my work because I believe that good design can make a real difference in the world — It
          can help businesses attract new customers, build stronger relationships, and create a more positive brand
          image. I love the challenge of taking someone's vision and turning it into a reality.
        </h5>
      </AnimatedComponent.div>
      <div className={"w-full"}>
        {selectedWorks.map((work, index) => (
          <AnimatedComponent.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 0.5 }} key={index}>
            <Card title={work.title} tags={work.tags} imgSrc={work.imgSrc} src={work.src} lg />
          </AnimatedComponent.div>
        ))}
      </div>
    </section>
  );
}
