let hasLoadedProfile = false;

import { getSteamProfile } from "./api.js";
import {
  renderLoading,
  renderProfile,
  renderError
} from "./ui.js";

import { REFRESH_INTERVAL } from "./config.js";

let refreshTimer;

try {
  const profile = await getSteamProfile();

  console.log("Profile:", profile);

  renderProfile(profile);
} catch (error) {
  console.error(error);

  renderError(error.message);
}

async function scheduleRefresh() {
  await loadProfile();

  refreshTimer = setTimeout(scheduleRefresh, REFRESH_INTERVAL);
}

scheduleRefresh();