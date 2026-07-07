import axios from "axios";

import config from "../../config/index.js";

import { error, log } from "../../utils/logger.js";

class SteamClient {
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.steampowered.com",
      timeout: 5000,
    });
  }

  async getPlayerSummary() {
    try {
      log("SteamClient", "Fetching player summary");

      const response = await this.client.get(
        "/ISteamUser/GetPlayerSummaries/v2/",
        {
          params: {
            key: config.steam.apiKey,
            steamids: config.steam.steamId,
          },
        },
      );

      const players = response.data?.response?.players;

      if (!players || players.length === 0) {
        throw new Error("No Steam player data returned");
      }

      return players[0];
    } catch (err) {
      error("SteamClient", err.message);

      throw new Error("Steam API request failed");
    }
  }
}

export default new SteamClient();