import { getSteamProfile } from "./api.js";
import { renderProfile } from "./ui.js";
import { REFRESH_INTERVAL } from "./config.js";

async function loadProfile() {
  try {
    const profile = await getSteamProfile();

    renderProfile(profile);
  } catch (error) {
    console.error(error);
  }
}

async function init() {
  await loadProfile();

  setInterval(loadProfile, REFRESH_INTERVAL);
}

init();