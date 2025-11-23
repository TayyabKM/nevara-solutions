import { type SchemaTypeDefinition } from "sanity";
import blog from "./blog";
import news from "./news";
import job from "./job";
import jobApplication from "./jobApplication";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, news, job, jobApplication],
};
