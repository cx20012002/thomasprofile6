import { type SchemaTypeDefinition } from "sanity";
import caseCategory from "@/sanity/schemaTypes/caseCategory";
import cases from "@/sanity/schemaTypes/cases";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseCategory, cases],
};
