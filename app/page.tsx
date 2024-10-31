"use client";

import BannerSection from "@/app/components/BannerSection";
import SkillsSection from "@/app/components/SkillsSection";
import SelectedWorks from "@/app/components/SelectedWorks";
import CorporateClients from "@/app/components/CorporateClients";

export default function Home() {
  return (
    <>
      <BannerSection />
      <SkillsSection />
      <SelectedWorks />
      <CorporateClients />
    </>
  );
}
