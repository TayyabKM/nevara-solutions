import { createClient } from "@sanity/client";

// ❗ SERVER-SIDE ONLY VARIABLES
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2023-10-01";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) throw new Error("Missing SANITY_PROJECT_ID");
if (!dataset) throw new Error("Missing SANITY_DATASET");
if (!token) throw new Error("Missing SANITY_WRITE_TOKEN");

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});
