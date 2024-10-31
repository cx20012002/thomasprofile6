"use client";

import Image from "next/image";
import Link from "next/link";
import { menu, socials } from "@/utils/content";

export default function Footer() {
  return (
    <footer>
      {/* Top */}
      <div className="section-container flex flex-col items-center justify-center bg-primary px-[80px] py-[150px] lg:h-[640px]">
        <div className="flex h-[492px] max-w-[838px] flex-col items-center gap-8 lg:h-[340px]">
          <div className="flex w-full flex-col items-center justify-center gap-5 text-[78px] font-semibold leading-[1em] -tracking-[5.6px] text-white lg:flex-row lg:text-[160px]">
            <h1>Let's</h1>
            <Image
              src={"/footer_img.avif"}
              alt={"Footer Image"}
              width={0}
              height={0}
              className={"w-[186px] object-contain"}
            />
            <h1>Talk</h1>
          </div>
          <h6 className="text-center text-[18px] font-semibold -tracking-[0.6px] text-white md:text-[28px] md:leading-[1.2em]">
            Good design can make a real difference in the world. I love the challenge of taking someone's vision and
            turning it into a reality
          </h6>
          <Link
            href={"/contact"}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-5 text-[16px] font-semibold"
          >
            <Image src={"/calendar-dark.svg"} alt={""} width={0} height={0} className="w-4" />
            Schedule a call
          </Link>
        </div>
      </div>
      {/* Bottom */}
      <div className="section-container flex h-[430px] w-full flex-col justify-center gap-3 bg-orange md:h-[373px] lg:h-[361px]">
        {/* Email */}
        <h1 className="text-[42px] font-semibold -tracking-[3.36px] md:text-[84px]">hello@conor.io</h1>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          {/* Social */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="rounded-full border-2 border-primary px-3 py-1 text-xs font-bold transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                {social.name}
              </Link>
            ))}
          </div>
          {/* Menu */}
          <div className="flex flex-col items-baseline justify-between gap-5 md:flex-row md:gap-10">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={"#"}
                className="text-[16px] font-semibold transition-colors duration-300 hover:text-neutral-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
