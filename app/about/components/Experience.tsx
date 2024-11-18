"use client";

import Link from "next/link";
import AnimatedComponent from "@/components/AnimatedComponent";
import Image from "next/image";
import { whyChooseMe } from "@/utils/content";

export default function Experience() {
  return (
    <section
      className={
        "section-container flex flex-col items-center justify-center gap-32 bg-white py-20 text-primary xl:gap-48"
      }
    >
      <div className={"flex w-full max-w-[1280px] flex-col justify-between gap-10 xl:flex-row"}>
        <div className={"w-full text-lg font-medium xl:w-3/12"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
            <Image src={"/back_icon.svg"} alt={"Back icon"} width={20} height={20} className={"w-[20px]"} />
            Experience
          </Link>
        </div>
        <div className={"w-full text-[16px] xl:w-8/12"}>
          <AnimatedComponent.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1, duration: 0.8 }}>
            <div className={"flex justify-between gap-5 border-b border-secondary py-7"}>
              <div className={"w-1/2"}>2023 — Current</div>
              <div className={"w-1/2"}>Lead Designer — Google</div>
            </div>
            <div className={"flex justify-between gap-5 border-b border-secondary py-7"}>
              <div className={"w-1/2"}>2023 — Current</div>
              <div className={"w-1/2"}>Lead Designer — Google</div>
            </div>
            <div className={"flex justify-between gap-5 border-b border-secondary py-7"}>
              <div className={"w-1/2"}>2023 — Current</div>
              <div className={"w-1/2"}>Lead Designer — Google</div>
            </div>
            <div className={"flex justify-between gap-5 border-b border-secondary py-7"}>
              <div className={"w-1/2"}>2023 — Current</div>
              <div className={"w-1/2"}>Lead Designer — Google</div>
            </div>
          </AnimatedComponent.div>
        </div>
      </div>

      <div className={"flex w-full max-w-[1280px] flex-col justify-between gap-10 xl:flex-row"}>
        <div className={"w-full text-lg font-medium xl:w-3/12"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
            <Image src={"/back_icon.svg"} alt={"Back icon"} width={0} height={0} className={"w-[20px]"} />
            Why choose me
          </Link>
        </div>
        <div className={"flex w-full flex-col gap-14 text-[16px] xl:w-8/12"}>
          <h5 className={"summary max-w-[600px]"}>I’m dedicated and love making a change through design</h5>
          <div className={"grid grid-cols-1 gap-12 md:grid-cols-2"}>
            {whyChooseMe.map((item, index) => (
              <AnimatedComponent.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, duration: 0.8 }}
                key={index}
                className={"flex flex-col gap-10 rounded-2xl bg-[#f9fafb] p-5"}
              >
                <Image src={item.icon} alt={"Why choose me"} width={0} height={0} className={"w-[53px]"} />
                <div className={"flex flex-col gap-3"}>
                  <h6 className={"small-title"}>{item.title}</h6>
                  <p className={"body-text"}>{item.description}</p>
                </div>
              </AnimatedComponent.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
