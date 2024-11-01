"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  let header = null;

  if (!pathname.startsWith("/studio")) {
    header = pathname === "/about" ? <Header isBgLight /> : <Header />;
  }

  return <>{header}</>;
}
