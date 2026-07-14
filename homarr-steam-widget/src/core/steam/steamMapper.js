import STATUS from "./steamStatus.js";

export function mapPlayer(player) {
  return {
    steamId: player.steamid,
    name: player.personaname,
    avatar: player.avatarfull,
    status: STATUS[player.personastate] ?? "unknown",
    game: player.gameextrainfo ?? null,
    gameId: player.gameid ?? null,
    profileUrl: player.profileurl,
    badges: player.badges,
    lastUpdated: new Date().toISOString(),
  };
}