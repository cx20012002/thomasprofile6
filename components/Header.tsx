"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";
import HeaderPopupContent from "@/components/HeaderPopupContent";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Header({ isBgLight = false }: { isBgLight?: boolean }) {
  gsap.registerPlugin(ScrollTrigger);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header
      className={`section-container flex h-[120px] items-center justify-between ${isBgLight ? "bg-secondary" : "bg-primary"}`}
    >
      <Link onClick={() => setIsModalOpen(false)} href={"/"}>
        {isBgLight ? (
          <Image src={"/logo_dark.png"} alt={"Logo"} width={32} height={32} />
        ) : (
          <Image src={"/logo.png"} alt={"Logo"} width={32} height={32} />
        )}
      </Link>
      <div onClick={toggleModal} className={"flex h-[19px] w-[91px] cursor-pointer flex-col justify-between"}>
        <div className={`h-[1px] ${isBgLight ? "bg-primary" : "bg-secondary"}`} />
        <div className={`h-[1px] ${isBgLight ? "bg-primary" : "bg-secondary"}`} />
        <div className={`h-[1px] ${isBgLight ? "bg-primary" : "bg-secondary"}`} />
      </div>
      <Modal
        isOpen={isModalOpen}
        className={"absolute inset-0 z-10 flex aspect-square h-screen w-full bg-primary text-white"}
      >
        <HeaderPopupContent setIsModalOpen={setIsModalOpen} />
      </Modal>
    </header>
  );
}
