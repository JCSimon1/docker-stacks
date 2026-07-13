import cache from "../../cache/memoryCache.js";
import config from "../../config/index.js";

import steamClient from "./steamClient.js";
import { mapPlayer } from "./steamMapper.js";
import { log } from "../../utils/logger.js";
import {
    memoryCache,
    updateSession
} from "../../cache/index.js";

const CACHE_KEY = "steam.profile";
const LAST_KNOWN_KEY = "steam.profile.lastKnown";
const LAST_KNOWN_TTL = 100 * 365 * 24 * 60 * 60; // ~100 Jahre, praktisch "für immer"

function hasStatusChanged(previous, current) {
  if (!previous) {
    return true;
  }

  return (
    previous.status !== current.status || previous.game !== current.game
  );
}

class SteamService {
  async getProfile() {

  const cached = cache.get(CACHE_KEY);

  if (cached) {

    log("SteamService", "Cache hit");

    const session = updateSession(cached);

    console.log("Session:", session);
    
    return {
      profile: cached,
      cached: true,
      session,
    };

  }

  log("SteamService", "Cache miss");

  const player = await steamClient.getPlayerSummary();
  const mapped = mapPlayer(player);
  const previous = cache.get(LAST_KNOWN_KEY);

  const profile = {
    ...mapped,

    lastUpdated: hasStatusChanged(previous, mapped)
      ? new Date().toISOString()
      : previous?.lastUpdated ?? new Date().toISOString(),
  };

  const session = updateSession(profile);

  cache.set(CACHE_KEY, profile, config.cache.ttl);
  cache.set(LAST_KNOWN_KEY, profile, LAST_KNOWN_TTL);

  console.log("Session:", session);
  return {
    profile,
    cached: false,
    session,
  };

}
}

export default new SteamService();