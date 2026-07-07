import steamClient from "./steamClient.js";
import { mapPlayer } from "./steamMapper.js";

class SteamService {
  async getProfile() {
    const player = await steamClient.getPlayerSummary();

    return mapPlayer(player);
  }
}

export default new SteamService();