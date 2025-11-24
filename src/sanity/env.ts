// Decide which prefixes to use depending on environment (client/server)

const isServer = typeof window === "undefined";

// PUBLIC vars (for client-side)
const PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const PUBLIC_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const PUBLIC_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// SERVER vars (for write operations)
const SERVER_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SERVER_DATASET = process.env.SANITY_DATASET;
const SERVER_API_VERSION = process.env.SANITY_API_VERSION;

// Final exported values – automatically pick correct ones
export const projectId = isServer ? SERVER_PROJECT_ID : PUBLIC_PROJECT_ID;
export const dataset = isServer ? SERVER_DATASET : PUBLIC_DATASET;
export const apiVersion =
  isServer
    ? SERVER_API_VERSION || "2023-10-01"
    : PUBLIC_API_VERSION || "2023-10-01";

// Strict checks
if (!projectId) throw new Error("Missing Sanity projectId");
if (!dataset) throw new Error("Missing Sanity dataset");
