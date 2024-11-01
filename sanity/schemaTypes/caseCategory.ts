export default {
  name: "caseCategory",
  title: "Case Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
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
  ],
};
