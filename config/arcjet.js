import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY, ARCJET_ENV } from "./env.js";

const aj = arcjet({
  env: ARCJET_ENV || "development",
  key: ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "DRY_RUN" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),

    tokenBucket({
      mode: "DRY_RUN",
      refillRate: 100,
      interval: 1,
      capacity: 200,
    }),
  ],
});
export default aj;
