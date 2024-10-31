"use client";

import Image from "next/image";
import Link from "next/link";
import { socials } from "@/utils/content";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function BannerSection() {
  const containerScope = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".main-top", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5, ease: "easeInOut" })
      .fromTo(".main-bottom", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.3")
      .fromTo(".scaled-img", { scale: 0 }, { scale: 1, duration: 0.5, ease: "backInOut", stagger: 0.3 }, "-=0.8");
  });

  return (
    <section
      className={"section-container flex flex-col gap-10 bg-primary pb-[50px] font-[600] text-secondary md:pb-[120px]"}
    >
      {/* Banner Main */}
      <main ref={containerScope} className={"flex flex-col gap-[80px] md:gap-[184px]"}>
        {/* Banner Main Top */}
        <div className={"main-top flex flex-col gap-8"} style={{ willChange: "scroll-position" }}>
          {/* Banner Title */}
          <div
            className={
              "text-[58px] leading-[1.05em] -tracking-[2.32px] md:text-[78px] md:-tracking-[5.6px] xl:text-[112px] 2xl:text-[140px]"
            }
          >
            <div className={"text flex flex-col items-baseline gap-3 md:flex-row md:gap-6"}>
              <div className={"relative w-[100px] md:w-[150px] xl:w-[230px]"}>
                <div
                  className={
                    "absolute inset-0 flex w-full origin-center scale-100 items-end transition-all duration-500 hover:scale-90"
                  }
                >
                  <Image
                    src={"/banner_sm_img.avif"}
                    alt={"Banner Image"}
                    width={0}
                    height={0}
                    priority
                    className={"scaled-img w-full object-contain"}
                  />
                </div>
              </div>

              <h1>John Conor</h1>
            </div>
            <h1>Digital designer</h1>
            <div className={"flex flex-col gap-1 md:flex-row md:items-center md:gap-5"}>
              <h1>based in</h1>
              <div className={"flex items-center gap-3 md:gap-5"}>
                <div
                  className={
                    "scaled-img flex aspect-square w-[48px] items-center justify-center rounded-full bg-secondary md:w-[64px] xl:w-[100px]"
                  }
                >
                  <Image
                    src={"/canada_leaf.svg"}
                    alt={"Canada leaf"}
                    width={48}
                    height={48}
                    priority
                    className={"aspect-square w-[24px] md:w-[32px] xl:w-[48px]"}
                  />
                </div>
                <h1>Canada</h1>
              </div>
            </div>
          </div>
          {/* Banner Summary */}
          <h5 className={"max-w-[1061px] text-[22px] leading-[1.2em] md:text-[28px] xl:text-[34px]"}>
            I'm passionate about my work because I believe that good design can make a real difference in the world — It
            can help businesses attract new customers, build stronger relationships, and create a more positive brand
            image. I love the challenge of taking someone's vision and turning it into a reality.
          </h5>
        </div>
        {/* Banner Main Bottom */}
        <div
          className={
            "main-bottom flex flex-col justify-start gap-10 xl:flex-row xl:items-end xl:justify-between xl:gap-10"
          }
        >
          <Link
            href={"#"}
            className={
              "group flex w-[250px] max-w-[250px] items-center justify-between border-b-2 py-2 transition-colors duration-500 hover:border-b-orange"
            }
          >
            <span className={"group flex w-full items-center justify-between"}>
              Get in touch{" "}
              <Image
                src={"/arrow-icon-light.svg"}
                alt={""}
                width={0}
                height={0}
                className={"w-4 -rotate-45 transition-all group-hover:rotate-0"}
              />
            </span>
          </Link>
          <div className={"flex gap-4"}>
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className={
                  "rounded-full border-2 px-3 py-1 text-xs transition-colors duration-300 hover:border-orange hover:bg-orange hover:text-primary"
                }
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
