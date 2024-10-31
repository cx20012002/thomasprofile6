import SingleTopBanner from "@/app/works/components/SingleTopBanner";
import SingleContent from "@/app/works/components/SingleContent";

export default function SingleWork({ params }: { params: { singleWork: string } }) {
  return (
    <div className={"flex flex-col"}>
      <SingleTopBanner title={params.singleWork} />
      <SingleContent />
    </div>
  );
}
