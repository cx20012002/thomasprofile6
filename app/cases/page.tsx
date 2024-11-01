"use client";

import BannerSection from "@/app/cases/components/BannerSection";
import CaseContent from "@/app/cases/components/CaseContent";
import { useEffect, useState, useCallback } from "react";
import { client } from "@/sanity/lib/client";
import { Case, Category } from "@/utils/types";

const QUERY_ALL = `*[_type == "cases"]{
  title,
  "coverImageUrl": coverImage.asset->url,
  "categories": categories[]->name
}`;

const QUERY_BY_CATEGORY = `*[_type == "cases" && $catname in categories[]->name]{
  title,
  "coverImageUrl": coverImage.asset->url,
  "categories": categories[]->name
}`;

const CATEGORIES_QUERY = `*[_type == "caseCategory"]{name}`;

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  useEffect(() => {
    const loadCases = () => {
      setLoading(true);
      const query = selectedCategory === "All" ? QUERY_ALL : QUERY_BY_CATEGORY;
      client
        .fetch(query, { catname: selectedCategory }, { next: { revalidate: 30 } })
        .then((res) => setCases(res))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    loadCases();
  }, [selectedCategory]);

  useEffect(() => {
    const loadCategories = () => {
      if (categories.length > 0) return;
      client
        .fetch(CATEGORIES_QUERY, {}, { next: { revalidate: 30 } })
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
