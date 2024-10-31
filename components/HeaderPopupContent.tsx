import React from "react";
import Link from "next/link";
import { menu } from "@/utils/content";
import Image from "next/image";

export default function HeaderPopupContent({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void;
}) {
  return (
    <section className={"section-container"}>
      <div className={"flex h-[120px] w-full items-center justify-between"}>
        <Link onClick={() => setIsModalOpen(false)} href={"/"}>
          <Image src={"/logo.png"} alt={"Logo"} width={32} height={32} />
        </Link>
        <Image
          onClick={() => setIsModalOpen(false)}
          src={"/close_icon.svg"}
          alt={"close icon"}
          width={0}
          height={0}
          className={
            "w-[51px] box-content scale-[70%] cursor-pointer p-2 md:scale-100"
          }
        />
      </div>
      {/* Content */}
      <div
        className={
          "flex w-full flex-col justify-between gap-16 py-20 md:flex-row"
        }
      >
        <div className={"order-2 flex w-full flex-col gap-3 md:order-1"}>
          <p className={"text-sm uppercase"}>Contact Info</p>
          <Link
            href={"mailto:cx20012002@gmail.com"}
            className={"text-[20px] font-semibold"}
          >
            cx20012002@gmail.com
          </Link>
          <Link
            href={"tel:+64123456789"}
            className={"text-[20px] font-semibold"}
          >
            +64 123 456 789
          </Link>
        </div>
        <div className={"order-1 flex w-full flex-col md:order-2"}>
          <div className={"flex flex-col gap-5"}>
            {menu.map((item, index) => (
              <Link
                onClick={() => setIsModalOpen(false)}
                href={item.url}
                key={index}
                className={
                  "group relative flex gap-3 border-b border-b-[rgba(255,255,255,0.4)] py-2"
                }
              >
                <p>0{index + 1}</p>
                <h2
                  className={
                    "text-[22px] font-semibold leading-[1em] md:text-[50px]"
                  }
                >
                  {item.name}
                </h2>
                <div
                  className={
                    "absolute bottom-0 h-[2px] w-0 bg-orange transition-all duration-500 group-hover:w-full"
                  }
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
