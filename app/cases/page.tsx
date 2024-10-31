"use client";

import { caseCards } from "@/utils/content";
import { useState } from "react";
import BannerSection from "@/app/cases/components/BannerSection";
import CaseContent from "@/app/cases/components/CaseContent";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All" ? caseCards : caseCards.filter((card) => card.category.includes(selectedCategory));

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <BannerSection selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
      <CaseContent filteredCards={filteredCards} />
    </>
  );
}
