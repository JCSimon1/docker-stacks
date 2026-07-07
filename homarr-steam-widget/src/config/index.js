import { optionalNumber, requireEnv } from "./env.js";

const config = Object.freeze({
  port: optionalNumber("PORT", 3000),

  steam: Object.freeze({
    apiKey: requireEnv("STEAM_API_KEY"),
    steamId: requireEnv("STEAM_ID"),
  }),

  cache: Object.freeze({
    ttl: optionalNumber("CACHE_SECONDS", 30),
  }),
});

export default config;