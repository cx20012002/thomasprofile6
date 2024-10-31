"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function SingleTopBanner({ title }: { title: string }) {
  return (
    <>
      <section className={"section-container h-[600px] bg-primary py-20 leading-none md:h-[700px]"}>
        <AnimatedComponent.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, duration: 0.5 }}
          className={"flex flex-col gap-5"}
        >
          <Link href={"/works"} className={"flex items-center gap-2 text-[16px] font-semibold text-secondary"}>
            All case studies
          </Link>
          <h1 className={"sub-title2"}>{title}</h1>
          <h5 className={"summary max-w-[1061px] text-secondary"}>
            Designing a seamless user experience for AI-Powered job matching platform with a focus on user-centered
            design approach for both web and mobile
          </h5>
          <ul className={"flex flex-col text-secondary"}>
            {Array.from({ length: 4 }).map((item, index) => (
              <li key={index} className={"flex items-center justify-between border-b border-b-secondary py-5"}>
                <div>client</div>
                <div>Nayzak</div>
              </li>
            ))}
          </ul>
        </AnimatedComponent.div>
      </section>
      <AnimatedComponent.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 0.5 }}>
        <Image src={"/selectedWork4.avif"} alt={"Selected Work"} width={0} height={0} priority className={"w-full"} />
      </AnimatedComponent.div>
    </>
  );
}
