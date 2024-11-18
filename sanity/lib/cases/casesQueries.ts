import { defineQuery } from "next-sanity";


export const All_CASES_QUERY = defineQuery(`*[_type == "cases"]{
    title,
    "coverImageUrl": coverImage.asset->url,
    "categories": categories[]->name
}`);

export const QUERY_BY_CATEGORY = defineQuery(`*[_type == "cases" && $catname in categories[]->name]{
    title,
    "coverImageUrl": coverImage.asset->url,
    "categories": categories[]->name
}`);

export const ALL_CATEGORIES_QUERY = defineQuery(`*[_type == "caseCategory"]{name}`);