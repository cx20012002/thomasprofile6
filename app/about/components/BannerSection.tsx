"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { socials } from "@/utils/content";
import Link from "next/link";

export default function BannerSection() {
  const aboutContainerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!aboutContainerRef.current) return;
      const bannerMainTop = aboutContainerRef.current.querySelector(".main-top");
      const bannerMainBottom = aboutContainerRef.current.querySelector(".main-bottom");
      const scaledImg = aboutContainerRef.current.querySelectorAll(".scaled-img");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(bannerMainTop, { y: 200, duration: 1 })
        .fromTo(bannerMainTop, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
        .fromTo(bannerMainBottom, { opacity: 0 }, { opacity: 1, duration: 1.5 }, "<=0.5")
        .from(scaledImg, { scale: 0, duration: 1, stagger: 0.3 }, "<=-0.3");
    },
    { scope: aboutContainerRef },
  );

  return (
    <section
      ref={aboutContainerRef}
      className={"section-container bg-secondary pb-[50px] font-[600] text-primary md:pb-[120px]"}
    >
      {/* Banner Main */}
      <main className={"flex flex-col items-start justify-center gap-10 md:items-center"}>
        {/* Banner Main Top */}
        <div className={"main-top flex flex-col items-start justify-center gap-8 pb-12 md:items-center md:pb-0"}>
          {/* Banner Title */}
          <div
            className={
              "flex flex-col items-start text-[58px] leading-[1.05em] -tracking-[2.32px] md:items-center md:text-[78px] xl:text-[112px] 2xl:text-[140px]"
            }
          >
            {/* First line */}
            <div className={"flex flex-col md:flex-row md:gap-5"}>
              {/* Break 1 */}
              <div className={"flex flex-row items-center gap-3 md:gap-5"}>
                <h1>Hello</h1>
                <div className={"relative w-[120px] md:w-[150px] xl:w-[230px]"}>
                  <div
                    className={
                      "absolute inset-0 flex w-full origin-center scale-100 items-center transition-all duration-500 hover:scale-90"
                    }
                  >
                    <Image
                      src={"/banner_sm_img.avif"}
                      alt={"Banner Image"}
                      width={230}
                      height={100}
                      priority
                      className={"scaled-img w-full object-contain"}
                    />
                  </div>
                </div>
              </div>
              {/* Break 2 */}
              <h1>I'm John</h1>
            </div>

            {/* Second line */}
            <div className={"flex flex-col items-start md:flex-row md:items-center md:gap-5"}>
              {/* Break 1 */}
              <h1>I design</h1>
              {/* Break 2 */}
              <div className={"flex gap-3 md:gap-5"}>
                <div className={"relative w-[120px] md:w-[150px] xl:w-[230px]"}>
                  <div
                    className={
                      "absolute inset-0 flex w-full origin-center scale-100 items-center transition-all duration-500 hover:scale-90"
                    }
                  >
                    <Image
                      src={"/banner_img_3.avif"}
                      alt={"Banner Image"}
                      width={230}
                      height={100}
                      priority
                      className={"scaled-img w-full object-contain"}
                    />
                  </div>
                </div>
                <h1>stuff</h1>
              </div>
            </div>
          </div>
          {/* Banner Summary */}
          <h5 className={"max-w-[1061px] text-[22px] leading-[1.2em] md:text-center md:text-[28px] xl:text-[34px]"}>
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
          <div className={"flex gap-4"}>
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className={
                  "rounded-full border-2 border-primary px-3 py-1 text-xs transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-secondary"
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
