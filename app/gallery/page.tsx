"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import PreviewImage from "./components/PreviewImage";

const imageUrls = [
  "/gallery/img0.jpg",
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
];

const projectNames = ["Atlas Studio", "Nimbus", "Solara", "Quantum", "Echo Labs", "Vesper", "Axon", "Horizon"];

export default function Gallery() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const indicator = document.querySelector(".indicator");
    const indicatorStep = 18;
    const names = gsap.utils.toArray(".name");

    gsap.set(indicator, {
      top: "0px",
    });

    const projects = gsap.utils.toArray(".project");

    projects.forEach((project: any, index) => {
      ScrollTrigger.create({
        trigger: project,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          gsap.to(indicator, {
            top: index * indicatorStep + "px",
            duration: 0.3,
            ease: "power2.inOut",
          });
          names.forEach((name: any, i) => {
            name.classList.toggle("active", i === index);
          });
        },
        onLeaveBack: () => {
          if (index === 0) return;
          gsap.to(indicator, {
            top: (index - 1) * indicatorStep + "px",
            duration: 0.3,
            ease: "power2.Out",
          });
          names.forEach((name: any, i) => {
            name.classList.toggle("active", i === index - 1);
          });
        },
      });
    });

    projects.forEach((project: any, i) => {
      const mask = project.querySelector(".mask");
      const digitWrapper = project.querySelector(".digit-wrapper");
      const firstDigit = project.querySelector(".first");
      const secondDigit = project.querySelector(".second");

      gsap.set([mask, digitWrapper, firstDigit, secondDigit], { y: 0 });
      gsap.set(mask, { position: "absolute", top: 0 });

      ScrollTrigger.create({
        trigger: project,
        start: "top bottom",
        end: "bottom top",
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        onUpdate: (self) => {
          const projectRect = project.getBoundingClientRect();
          const windowCenter = window.innerHeight / 2;
          const nextProject = projects[i + 1] as any;
          const velocityAdjustment = Math.min(scrollVelocity * 0.1, 100);
          const pushPoint = window.innerHeight * (0.85 + velocityAdjustment / window.innerHeight);

          // 如果项目的顶部位置小于等于窗口中心
          if (projectRect.top <= windowCenter) {
            if (!mask.isFixed) {
              mask.isFixed = true;
              gsap.set(mask, { position: "fixed", top: "50vh" });
            }

            if (nextProject) {
              const nextRect = nextProject.getBoundingClientRect();

              // 如果下一个项目的顶部位置小于等于推送点并且活动索引不等于当前索引加1
              if (nextRect.top <= pushPoint && activeIndex !== i + 1) {
                // 停止当前项目的所有动画
                gsap.killTweensOf([mask, digitWrapper, firstDigit, secondDigit]);

                activeIndex = i + 1;
                gsap.to(mask, {
                  y: -80,
                  duration: 0.3,
                  ease: "power2.out",
                  overwrite: true,
                });
                gsap.to(digitWrapper, {
                  y: -80,
                  duration: 0.5,
                  delay: 0.5,
                  ease: "power2.out",
                  overwrite: true,
                });
                gsap.to(firstDigit, {
                  y: -80,
                  duration: 0.75,
                  ease: "power2.out",
                  overwrite: true,
                });
                gsap.to(secondDigit, {
                  y: -80,
                  duration: 0.75,
                  delay: 0.1,
                  ease: "power2.out",
                  overwrite: true,
                });
              }
            }
          } else {
            mask.isFixed = false;
            gsap.set(mask, { position: "absolute", top: 0 });
          }

          // 如果滚动方向向上并且项目的顶部位置大于窗口中心
          if (self.direction === -1 && projectRect.top > windowCenter) {
            mask.isFixed = false;
            gsap.set(mask, { position: "absolute", top: 0 });

            if (i > 0 && activeIndex === i) {
              const prevProject = projects[i - 1] as any;
              if (prevProject) {
                const prevMask = prevProject.querySelector(".mask");
                const prevWrapper = prevProject.querySelector(".digit-wrapper");
                const prevFirst = prevProject.querySelector(".first");
                const prevSecond = prevProject.querySelector(".second");

                gsap.killTweensOf([prevMask, prevWrapper, prevFirst, prevSecond]);

                activeIndex = i - 1;

                gsap.to([prevMask, prevWrapper], {
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                  overwrite: true,
                });
                gsap.to(prevFirst, {
                  y: 0,
                  duration: 0.75,
                  ease: "power2.out",
                  overwrite: true,
                });
                gsap.to(prevSecond, {
                  y: 0,
                  duration: 0.75,
                  delay: 0.1,
                  ease: "power2.out",
                  overwrite: true,
                });
              }
            }
          }
        },
        onEnter: () => {
          if (i === 0) activeIndex = 0;
        },
      });
    });

    // 滚动速度和活动索引的变量
    let activeIndex = -1;
    let lastScrollTop = 0;
    let scrollVelocity = 0;

    // 事件监听器以跟踪滚动速度
    window.addEventListener(
      "scroll",
      () => {
        const st = window.pageYOffset;
        scrollVelocity = Math.abs(st - lastScrollTop);
        lastScrollTop = st;
      },
      { passive: true },
    );

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {/* white space */}
      <div className="h-[50vh] w-[100vw]" />

      {/* gallery */}
      <div className="relative flex w-full flex-col gap-[10em] text-[50px] font-semibold">
        {Array.from({ length: 8 }).map((_, index) => (
          // project
          <div key={index} className="project relative flex h-[100vh] w-[100vw]">
            {/* numbers */}
            <div className="index h-0 flex-1 pl-[2em]">
              <div className="mask absolute left-[2em] h-[70px] overflow-hidden will-change-transform">
                <div className="digit-wrapper relative inline-block will-change-transform">
                  <h1 className="relative will-change-transform">
                    <span className="first relative inline-block will-change-transform">0</span>
                    <span className="second relative inline-block will-change-transform">{index + 1}</span>
                  </h1>
                </div>
              </div>
            </div>
            {/* Images */}
            <div className="img flex h-[100vh] flex-[6] flex-col gap-[1em]">
              {imageUrls.map((_, idx) => (
                <Image
                  key={idx}
                  src={`/gallery/img${idx}.jpg`}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, 640px"
                  alt="Gallery Image"
                  className="aspect-square w-[200px] flex-1 overflow-hidden object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* white space */}
      <div className="h-[45vh] w-[100vw]" />

      {/* project names */}
      <div className="fixed left-[40%] top-[50vh] h-full w-[200px]">
        {/* indicator */}
        <div className="indicator absolute right-0 flex h-[18px] w-[18px] items-center justify-center will-change-transform">
          <div className="h-[12px] w-[12px] bg-black" style={{ clipPath: "polygon(0 50%, 100% 100%, 100% 0)" }}></div>
        </div>
        {/* names */}
        {projectNames.map((name, index) => (
          <div key={index} className="name h-[18px]">
            <p className="text-[16px] leading-[16px] text-gray-500">{name}</p>
          </div>
        ))}

        {/* Additional project names here */}
      </div>

      {/* preview image */}
      <PreviewImage imageUrls={imageUrls} />
    </>
  );
}
