import { getSteamProfile } from "./api.js";
import { renderProfile } from "./ui.js";

async function init() {
  try {
    const profile = await getSteamProfile();

    renderProfile(profile);
  } catch (err) {
    console.error(err);
  }
}

init();