import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  title?: string;
  tags?: string[];
  imgSrc?: string;
  src?: string;
  lg?: boolean;
}

export default function Card({
  title = "Title here",
  tags = ["tags"],
  imgSrc = "/selectedWork1.avif",
  src = "/",
  lg = false,
}: ICardProps) {
  return (
    <Link
      href={src}
      className={`work-wrapper group relative flex h-fit w-full flex-col justify-end overflow-hidden rounded-none 
        ${lg ? "md:p-0 lg:h-[900px] lg:rounded-none" : "md:p-5 lg:rounded-[40px]"} lg:h-[900px]`}
    >
      <div
        className={`relative w-full overflow-hidden 
          ${lg ? "h-[350px] rounded-none" : "h-[350px] rounded-[24px] md:rounded-[40px]"} lg:inset-0 lg:absolute lg:h-full`}
      >
        <Image
          src={imgSrc}
          alt={"Selected Work"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div
        className={`relative w-full bg-white p-5 lg:p-12 
          ${lg ? "rounded-none" : "rounded-[32px]"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-5">
            <h6 className="text-[18px] font-[600] md:text-[26px]">{title}</h6>
            <div className="flex gap-3 md:gap-5">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#5f6980] px-3 py-1 text-[14px] font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block rounded-full border-2 border-primary p-3">
            <Image
              src={"/arrow-icon-dark.svg"}
              alt={""}
              width={40}
              height={40}
              className={"w-5 -rotate-45 transition-all group-hover:rotate-0"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
