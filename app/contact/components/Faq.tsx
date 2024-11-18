"use client";

import AnimatedComponent from "@/components/AnimatedComponent";
import { expertise, faqs } from "@/utils/content";
import React, { useRef, useState } from "react";

export default function Faq() {
  const [showContent, setShowContent] = useState<{ [key: number]: boolean }>({});
  const contentRef = useRef<HTMLParagraphElement>(null);
  const toggleContent = (index: number) => {
    setShowContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section className="section-container bg-gray-50 py-10 md:py-20">
      <AnimatedComponent.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex w-full flex-col items-center justify-center gap-10"
      >
        <h4 className="text-[18px] md:text-[42px] font-semibold tracking-[-0.02em]">FAQs</h4>
        <main className={"flex flex-col divide-y divide-[rgba(0,0,0,0.2)]"}>
          {faqs.map((item, index) => (
            <div key={index} className={"flex flex-col gap-2 py-5"}>
              <div className={"flex cursor-pointer items-center justify-between"} onClick={() => toggleContent(index)}>
                <h3 className={"text-[16px]"}>{item.title}</h3>
                <div
                  className={`relative h-[2px] w-4 bg-black ${
                    !showContent[index] &&
                    "after:absolute after:left-1/2 after:top-1/2 after:block after:h-4 after:w-[2px] after:-translate-x-1/2 " +
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
                {item.content}
              </p>
            </div>
          ))}
        </main>
      </AnimatedComponent.div>
    </section>
  );
}
