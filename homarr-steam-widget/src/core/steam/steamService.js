import cache from "../../cache/memoryCache.js";
import config from "../../config/index.js";

import steamClient from "./steamClient.js";
import { mapPlayer } from "./steamMapper.js";
import { log } from "../../utils/logger.js";

const CACHE_KEY = "steam.profile";

class SteamService {
  async getProfile() {
    const cached = cache.get(CACHE_KEY);

    if (cached) {
     log("SteamService", "Cache hit");

    return {
      profile: cached,
      cached: true,
    };
}

log("SteamService", "Cache miss");

    const player = await steamClient.getPlayerSummary();

    const profile = {
      ...mapPlayer(player),
      lastUpdated: new Date().toISOString(),
    };

    cache.set(CACHE_KEY, profile, config.cache.ttl);

    return {
      profile,
      cached: false,
    };
  }
}

export default new SteamService();