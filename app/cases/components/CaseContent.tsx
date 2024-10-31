import AnimatedComponent from "@/components/AnimatedComponent";
import Link from "next/link";
import Image from "next/image";

interface CaseContentProps {
  filteredCards: {
    title: string;
    imgSrc: string;
    category: string[];
  }[];
}
export default function CaseContent({ filteredCards }: CaseContentProps) {
  return (
    <section className={"grid grid-cols-1 xl:grid-cols-2"}>
      {filteredCards.map((card, index) => (
        <AnimatedComponent.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 1 }} key={index}>
          <Link href={"/cases/something"}>
            <Image
              src={card.imgSrc}
              alt={card.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={"aspect-[8/6.5] w-full object-cover"}
            />
            <div className={"flex flex-col justify-center gap-3 px-5 py-8 xl:p-10"}>
              <h6 className={"text-[18px] font-semibold lg:text-[24px] xl:text-[28px]"}>{card.title}</h6>
              <div className={"flex gap-3 text-sm font-semibold"}>
                {card.category.map((item, index) => (
                  <div key={index} className={"rounded-full border border-primary px-2 py-1"}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </AnimatedComponent.div>
      ))}
    </section>
  );
}
