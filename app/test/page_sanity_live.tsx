"use client";

import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

interface Case {
  title: string;
  _id: string;
}

export default function Page() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    // Fetch initial cases
    client.fetch<Case[]>(`*[_type == "cases"]{title,_id}`).then((initialCases) => {
      console.log(initialCases);
      setCases(initialCases);
    });

    // Listen for real-time updates
    const subscription = client.listen(`*[_type == "cases"]{title}`).subscribe((res) => {
      if (res.result) {
        const { title, _id } = res.result;

        // 使用函数式更新以确保我们获取最新的 cases
        setCases((prevCases) => {
         const index = prevCases.findIndex((c) => c._id === _id);
          if (index !== -1) {
            // 更新现有案例
            return prevCases.map((c) => (c._id === _id ? { title, _id } : c));
          } else {
            // 添加新案例
            return [...prevCases, { title, _id }];
          }
         
        });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Cases</h1>
      {cases.map((caseItem, index) => (
        <div key={index}>{caseItem.title}</div>
      ))}
    </div>
  );
}
