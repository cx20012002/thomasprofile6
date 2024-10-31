"use client";

import Image from "next/image";
import AnimatedComponent from "@/components/AnimatedComponent";

export default function SingleContent() {
  return (
    <>
      <section className={"section-container flex w-full items-center justify-center bg-white py-20 lg:py-[184px]"}>
        <AnimatedComponent.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, duration: 0.8 }}
          className={"flex max-w-[600px] flex-col gap-10"}
        >
          <h5 className={"summary text-primary"}>
            Designing a seamless user experience for AI-Powered job matching platform
          </h5>
          <p className={"body-text"}>
            The rise of artificial intelligence (AI) is transforming industries and revolutionizing the way we work. In
            the realm of recruitment, AI is playing an increasingly crucial role, helping job seekers find suitable
            positions and employers connect with qualified candidates. However, the success of AI-powered job matching
            platforms hinges on their ability to provide a seamless and intuitive user experience (UI). As a UI
            designer, I was tasked with creating a UI for an AI-powered job matching platform that would be both
            aesthetically pleasing and functionally effective.
          </p>
          <p className={"body-text"}>
            The rise of artificial intelligence (AI) is transforming industries and revolutionizing the way we work. In
            the realm of recruitment, AI is playing an increasingly crucial role, helping job seekers find suitable
            positions and employers connect with qualified candidates. However, the success of AI-powered job matching
            platforms hinges on their ability to provide a seamless and intuitive user experience (UI). As a UI
            designer, I was tasked with creating a UI for an AI-powered job matching platform that would be both
            aesthetically pleasing and functionally effective.
          </p>
        </AnimatedComponent.div>
      </section>
      <div>
        <Image src={"/selectedWork2.avif"} alt={"Selected Work"} width={0} height={500} className={"w-full"} />
        <div className={"flex flex-col lg:flex-row"}>
          <Image src={"/selectedWork3.avif"} alt={"Selected Work"} width={0} height={0} className={"w-full lg:w-1/2"} />
          <Image src={"/selectedWork5.avif"} alt={"Selected Work"} width={0} height={0} className={"w-full lg:w-1/2"} />
        </div>
      </div>
    </>
  );
}
