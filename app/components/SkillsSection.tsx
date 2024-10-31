"use client";

import { useRef, useState } from "react";
import { expertise } from "@/utils/content";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function SkillsSection() {
  const [showContent, setShowContent] = useState<{ [key: number]: boolean }>({});
  const contentRef = useRef<HTMLParagraphElement>(null);
  const toggleContent = (index: number) => {
    setShowContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={"section-container bg-orange py-20"}>
      <AnimatedComponent.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, duration: 0.5 }}
        className={"flex flex-col gap-2 md:gap-10"}
      >
        <div>
          <small className={"small-title"}>Expertise</small>
          <h2 className={"sub-title"}>Services and skills</h2>
        </div>
        <main className={"flex flex-col divide-y divide-[rgba(0,0,0,0.2)]"}>
          {expertise.map((item, index) => (
            <div key={item.id} className={"flex flex-col gap-2 py-5"}>
              <div className={"flex cursor-pointer items-center justify-between"} onClick={() => toggleContent(index)}>
                <h3 className={"text-[18px] font-[600] md:text-[24px] xl:text-[26px]"}>{item.title}</h3>
                <div
                  className={`relative h-[3px] w-6 bg-black ${
                    !showContent[index] &&
                    "after:absolute after:left-1/2 after:top-1/2 after:block after:h-6 after:w-[3px] after:-translate-x-1/2 " +
                      'after:-translate-y-1/2 after:transform after:bg-black after:content-[""]'
                  }`}
                />
              </div>

              <p
                ref={contentRef}
                style={{
                  height: showContent[index] ? contentRef.current?.scrollHeight : 0,
                  overflow: "hidden",
                  transition: "height 0.5s ease",
                }}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est fuga.
              </p>
            </div>
          ))}
        </main>
      </AnimatedComponent.div>
    </section>
  );
}
