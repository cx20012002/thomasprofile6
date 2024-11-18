"use client";

import BannerSection from "@/app/cases/components/BannerSection";
import CaseContent from "@/app/cases/components/CaseContent";
import { useEffect, useState, useCallback } from "react";
import { client } from "@/sanity/lib/client";
import { All_CASES_QUERYResult, ALL_CATEGORIES_QUERYResult } from "@/sanity.types";
import { All_CASES_QUERY, ALL_CATEGORIES_QUERY, QUERY_BY_CATEGORY } from "@/sanity/lib/cases/casesQueries";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cases, setCases] = useState<All_CASES_QUERYResult>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<ALL_CATEGORIES_QUERYResult>([]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Fetch cases based on selected category
  useEffect(() => {
    const loadCases = () => {
      setLoading(true);
      const query = selectedCategory === "All" ? All_CASES_QUERY : QUERY_BY_CATEGORY;
      client
        .fetch(query, { catname: selectedCategory }, { next: { revalidate: 30 } })
        .then((res) => setCases(res))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    loadCases();
  }, [selectedCategory]);

  // Fetch categories
  useEffect(() => {
    const loadCategories = () => {
      if (categories.length > 0) return;
      client
        .fetch(ALL_CATEGORIES_QUERY, {}, { next: { revalidate: 30 } })
        .then((fetchedCategories) => {
          if (fetchedCategories.length > 0) {
            setCategories(fetchedCategories);
          }
        })
        .catch((error) => console.error("Error fetching categories:", error));
    };
    loadCategories();
  }, [categories]);


  return (
    <>
      <BannerSection
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        categories={categories}
      />
      {loading ? (
        <section className="section-container flex h-screen w-full items-center justify-center">
          <div className="text-3xl font-semibold">Loading...</div>
        </section>
      ) : (
        <CaseContent caseCards={cases} />
      )}
    </>
  );
}
