import React, { useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function PreviewImage({ imageUrls }: { imageUrls: string[] }) {
  const [previewImgUrl, setPreviewImgUrl] = useState(imageUrls[0]);

  useGSAP(() => {
    const imgElements = document.querySelectorAll(".img img");

   

    imgElements.forEach((img, index) => {
      ScrollTrigger.create({
        trigger: img,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          setPreviewImgUrl(imageUrls[index % imageUrls.length]);
        },
        onEnterBack: () => {
          setPreviewImgUrl(imageUrls[index % imageUrls.length]);
        },
      });
    });
  }, [imageUrls]);

  return (
    <div className="fixed bottom-[2em] right-[2em] h-[calc(50vh-2em)] w-[400px] opacity-90">
      <Image
        src={previewImgUrl}
        width={400}
        height={600}
        alt="Preview Image"
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
