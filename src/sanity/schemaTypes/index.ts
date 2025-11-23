import { type SchemaTypeDefinition } from "sanity";
import blog from "./blog";
import news from "./news";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, news],
};
