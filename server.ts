// Import path interpreted by the Remix compiler
import * as build from "@remix-run/dev/server-build";
import { createRequestHandler } from "@netlify/remix-edge-adapter";

export default createRequestHandler({
  build,
  // process.env.NODE_ENV is provided by Remix at compile time
  mode: process.env.NODE_ENV,
});

export const config = {
  cache: "manual",
  path: "/*",
  // Pass all assets to the netlify asset server
  excluded_patterns: ["/_assets/*", "/_shared/*", "/**/*.js"],
};
