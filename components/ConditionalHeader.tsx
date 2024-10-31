"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  return <>{pathname === "/about" ? <Header isBgLight /> : <Header />}</>;
}
