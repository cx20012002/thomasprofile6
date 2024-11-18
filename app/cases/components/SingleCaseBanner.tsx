"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function SingleCaseBanner() {
  return (
    <section className={"flex flex-col gap-20 overflow-hidden bg-primary pt-10 text-secondary md:pt-20"}>
      <div className={"section-container flex flex-col gap-8 xl:flex-row"}>
        <div className={"flex w-full max-w-[1280px] flex-col gap-10"}>
          <Link href={"/"} className={"flex items-center gap-3"}>
            <Image
              src={"/back_icon_light.svg"}
              alt={"back"}
              width={1516}
              height={706}
              className={"aspect-square w-5 rotate-180"}
            />
            Back to blog
          </Link>
          <h1 className={"sub-title2"}>20 psychological principles applied to product design</h1>
        </div>
      </div>
      <AnimatedComponent.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 0.5 }}>
        <Image
          src={"/case-img0.avif"}
          alt={"case"}
          width={0}
          height={0}
          priority
          className={"h-[350px] w-full object-cover md:h-[500px] xl:h-[800px]"}
        />
      </AnimatedComponent.div>
    </section>
  );
}
