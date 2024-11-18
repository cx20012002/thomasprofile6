import { type SchemaTypeDefinition } from "sanity";
import { caseCategoryType } from "./caseCategoryType";
import { caseType } from "./caseType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseCategoryType, caseType],
};
