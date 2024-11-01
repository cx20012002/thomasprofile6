"use client";

import Image from "next/image";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function CorporateClients() {
  return (
    <AnimatedComponent.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, duration: 0.5 }}
      className={"section-container pb-20"}
    >
      <div
        className={
          "flex w-full flex-col justify-center rounded-[24px] border border-primary bg-[#f9fafb] lg:h-[400px] lg:flex-row"
        }
      >
        {/* Left */}
        <div className="flex w-full flex-col justify-center gap-5 p-5 pt-12 md:px-16 md:pb-0 md:pt-16 lg:max-w-[490px] lg:border-r lg:border-primary lg:p-16">
          <h6 className={"text-[20px] font-semibold"}>Clients</h6>
          <h6 className={"text-[24px] font-semibold leading-[34px] lg:text-[28px]"}>
            Focused to create a thoughtful and unique visual craft for brands
          </h6>
        </div>
        {/* right */}
        <div className={"flex items-center justify-center p-5 pb-12 md:p-[64px]"}>
          <div className={"flex w-full flex-wrap justify-start gap-8 lg:justify-center"}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Image
                key={index}
                src={`/logo${index}.avif`}
                alt={"Client Logo"}
                width={0}
                height={0}
                className={"w-[120px] object-contain"}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedComponent.section>
  );
}
