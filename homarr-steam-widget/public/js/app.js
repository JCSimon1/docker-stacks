import { getSteamProfile } from "./api.js";
import { renderLoading, renderProfile, renderError } from "./ui.js";
import { REFRESH_INTERVAL } from "./config.js";

let refreshTimer;
let tickTimer;
let currentProfile = null;

async function loadProfile() {
  try {
    const profile = await getSteamProfile();

    console.log("Profile:", profile);
    console.log("Status =", profile.status);

    currentProfile = profile;
    renderProfile(profile);
  } catch (error) {
    console.error(error);

    currentProfile = null;
    renderError(error.message);
  }
}

async function scheduleRefresh() {
  await loadProfile();

  refreshTimer = setTimeout(scheduleRefresh, REFRESH_INTERVAL);
}

function scheduleTick() {
  // Rendert nur den "Updated: vor X Sekunden"-Text neu,
  // unabhängig vom API-Poll, damit die Anzeige flüssig hochzählt
  // statt in REFRESH_INTERVAL-Sprüngen.
  tickTimer = setInterval(() => {
    if (currentProfile) {
      renderProfile(currentProfile);
    }
  }, 1000);
}

renderLoading();
scheduleRefresh();
scheduleTick();