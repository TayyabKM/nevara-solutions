// env.ts

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  (() => {
    if (typeof window === "undefined") {
      throw new Error("Missing SANITY_PROJECT_ID");
    }
    return "";
  })();

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  (() => {
    if (typeof window === "undefined") {
      throw new Error("Missing SANITY_DATASET");
    }
    return "";
  })();

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_API_VERSION ||
  "2023-10-01";
