export default {
  name: "cases",
  title: "Cases",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: any) => input.split(" ").slice(0, 3).join("-").toLowerCase(),
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "caseCategory" }] }],
    },
  ],
};
