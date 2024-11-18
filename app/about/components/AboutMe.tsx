"use client";

import Image from "next/image";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function AboutMe() {
  return (
    <section className={"section-container flex items-center justify-center bg-primary py-20 font-semibold text-white"}>
      <div className={"flex w-[1280px] flex-col justify-between gap-10 xl:flex-row"}>
        <div className={"flex w-full items-center overflow-hidden xl:w-7/12"}>
          <AnimatedComponent.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, duration: 0.3 }}
            className={"flex flex-col justify-center gap-5"}
          >
            <h6 className={"small-title"}>About me</h6>
            <h2 className={"sub-title"}>Solving big user experience problems</h2>
            <h6 className={"text-[28px] leading-[1.3em]"}>
              I believe that good design can make a real difference in the world. It can help businesses attract new
              customers, build stronger relationships, and create a more positive brand image.
            </h6>
          </AnimatedComponent.div>
        </div>
        <div className={"w-full xl:w-5/12"}>
          <AnimatedComponent.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, duration: 0.3 }}
            className={"group"}
          >
            <Image
              src={"/aboutme.avif"}
              alt={"About Me"}
              width={500}
              height={600}
              className={
                "h-[500px] w-full rounded-[40px] object-cover transition-transform duration-300 group-hover:scale-90 md:h-[600px]"
              }
            />
          </AnimatedComponent.div>
        </div>
      </div>
    </section>
  );
}
