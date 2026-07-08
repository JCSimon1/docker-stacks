export function renderProfile(profile) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="steam">
      <img
        class="steam-avatar"
        src="${profile.avatar}"
        alt="${profile.name}"
      />

      <div class="steam-body">
        <div class="steam-name">
          ${profile.name}
        </div>

        <div class="steam-status">
          <span class="status-dot ${profile.status}"></span>
          ${profile.status}
        </div>

        <div class="steam-game">
          ${profile.game ?? "Kein Spiel aktiv"}
        </div>

        <a
          class="steam-link"
          href="${profile.profileUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam-Profil ↗
        </a>
      </div>
    </div>
  `;
}