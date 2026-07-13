import { formatDuration } from "./time.js";

const app = document.getElementById("app");

function getStatusLabel(status) {

  switch (status) {

    case "online":
      return "Online";

    case "offline":
      return "Offline";

    case "away":
      return "Abwesend";

    case "busy":
      return "Beschäftigt";

    case "snooze":
      return "Abwesend";

    case "lookingToTrade":
      return "Handel";

    case "lookingToPlay":
      return "Spiel gesucht";

    default:
      return status;
  }

}

export function formatLastUpdated(timestamp) {

  if (!timestamp) {
    return "Woher soll ich das wissen?";
  }

  const diff = Math.floor(
    (Date.now() - new Date(timestamp).getTime()) / 1000
  );

  if (diff < 10) {
    return "gerade eben";
  }

  if (diff < 60) {
    return `vor ${diff} Sekunden`;
  }

  const minutes = Math.floor(diff / 60);

  if (minutes < 60) {
    return `vor ${minutes} Minuten`;
  }

  const hours = Math.floor(minutes / 60);

  return `vor ${hours} Stunden`;
}

export function renderLoading() {
  app.innerHTML = `
    <div class="steam steam-loading">

      <div class="steam-avatar placeholder"></div>

      <div class="steam-body">

        <div class="steam-name placeholder-text">
          Steam wird geladen…
        </div>

        <div class="steam-status">
          Verbindung wird hergestellt
        </div>

      </div>

    </div>
  `;
}

export function renderError(message = "Steam API nicht erreichbar") {
  app.innerHTML = `
    <div class="steam steam-error">

      <div class="steam-avatar error-icon">
        ⚠
      </div>

      <div class="steam-body">

        <div class="steam-name">
          Fehler
        </div>

        <div class="steam-status">
          ${message}
        </div>

      </div>

    </div>
  `;
}

export function renderProfile(profile) {
  app.innerHTML = `
    <div class="steam">

      <img
        class="steam-avatar avatar-${profile.status}"
        src="${profile.avatar}"
        alt="${profile.name}"
      />

      <div class="steam-body">
        <div class="steam-name">
          ${profile.name}
        </div>

        <div class="steam-status">
          <span class="status-dot status-${profile.status}"></span>
          ${getStatusLabel(profile.status)}
        </div>

        <hr class="steam-divider">

        <div class="steam-game">
          ${
            profile.game
              ? `🎮 ${profile.game}`
              : "🎮 Nicht im Spiel"
          }
        </div>

        <div class="steam-session">
          ${
            profile.session?.gameStartedAt
                ? formatDuration(profile.session.gameStartedAt)
                : ""
          }
        </div>

        <hr class="steam-divider">

        <a
          class="steam-link"
          href="${profile.profileUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam-Profil ↗
        </a>

        <div class="steam-updated">
          Aktualisiert ${formatLastUpdated(profile.lastUpdated)}
        </div>
      </div>
    </div>
  `;
}