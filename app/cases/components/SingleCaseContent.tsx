"use client";

import AnimatedComponent from "@/components/AnimatedComponent";

export default function SingleCaseContent() {
  return (
    <section className={"section-container flex justify-center py-10 xl:py-20"}>
      <AnimatedComponent.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, duration: 1 }}
        className={"flex w-full max-w-[800px] flex-col gap-10"}
      >
        <p className={"body-text"}>
          As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly
          those that relate to web design and development. The prediction is that by 2029, the job outlook for these two
          fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming
          to work in a freelance capacity, a career in web design can offer a variety of employment arrangements,
          competitive salaries, and opportunities to utilize both technical and creative skill sets.
        </p>
        <h6 className={"blog-content-smallTitle"}>Full-stack, back-end, and front-end web development</h6>
        <p className={"body-text"}>
          As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly
          those that relate to web design and development. The prediction is that by 2029, the job outlook for these two
          fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming
          to work in a freelance capacity, a career in web design can offer a variety of employment arrangements,
          competitive salaries, and opportunities to utilize both technical and creative skill sets.
        </p>
        <h3 className={"blog-content-subtitle"}>Full-stack, back-end, and front-end web development</h3>
        <p className={"body-text"}>
          As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly
          those that relate to web design and development. The prediction is that by 2029, the job outlook for these two
          fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming
          to work in a freelance capacity, a career in web design can offer a variety of employment arrangements,
          competitive salaries, and opportunities to utilize both technical and creative skill sets.
        </p>
        <h3 className={"blog-content-subtitle"}>Are web designers in demand in 2022?</h3>
        <p className={"body-text"}>
          As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly
          those that relate to web design and development. The prediction is that by 2029, the job outlook for these two
          fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming
          to work in a freelance capacity, a career in web design can offer a variety of employment arrangements,
          competitive salaries, and opportunities to utilize both technical and creative skill sets.
        </p>
      </AnimatedComponent.div>
    </section>
  );
}
