import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

const CASES_QUERY = `*[_type == "cases" && "Coding" in categories[]->name]{
  title,
}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const cases = await client.fetch<SanityDocument[]>(CASES_QUERY, {}, options);

  return (
    <div>
      {cases.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
}
