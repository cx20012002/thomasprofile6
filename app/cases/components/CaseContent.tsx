import { memo } from "react";
import AnimatedComponent from "@/components/AnimatedComponent";
import Link from "next/link";
import Image from "next/image";
import { Case } from "@/utils/types";

interface Props {
  caseCards: Case[];
}

const CaseContent = memo(({ caseCards }: Props) => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2">
      {caseCards.map((card, index) => (
        <AnimatedComponent.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 1 }} key={index}>
          <Link href="/cases/something">
            <Image
              src={card.coverImageUrl}
              alt={card.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="aspect-[8/6.5] w-full object-cover"
            />
            <div className="flex flex-col justify-center gap-3 px-5 py-8 xl:p-10">
              <h6 className="text-[18px] font-semibold lg:text-[24px] xl:text-[28px]">{card.title}</h6>
              <div className="flex gap-3 text-sm font-semibold">
                {card.categories.map((item, index) => (
                  <div key={index} className="rounded-full border border-primary px-2 py-1">
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
});

export default CaseContent;
