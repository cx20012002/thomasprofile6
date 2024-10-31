import { caseCategories } from "@/utils/content";

interface BannerSectionProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}
export default function BannerSection({ selectedCategory, handleCategoryClick }: BannerSectionProps) {
  return (
    <section className={"flex gap-20 overflow-hidden bg-primary py-10 text-secondary md:py-20"}>
      <div className={"section-container flex flex-col gap-8 xl:flex-row"}>
        <div className={"flex w-full flex-col xl:w-1/2"}>
          <h1 className={"sub-title2"}>Journal</h1>
          <h5 className={"summary max-w-[1061px]"}>
            I believe that good design can make a real difference in the world
          </h5>
        </div>
        <div className={"w-full xl:w-1/2"}>
          <p className={"border-b border-secondary py-4"}>Categories</p>
          <div className={"grid grid-cols-3"}>
            {caseCategories.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(item.title)}
                className={`border-b ${item.title === selectedCategory ? "border-orange" : "border-secondary"} py-4 text-left transition-colors duration-300 hover:border-orange hover:text-orange`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
