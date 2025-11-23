import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-10-01",
  token: process.env.SANITY_WRITE_TOKEN!, // MUST exist
  useCdn: false,
});
