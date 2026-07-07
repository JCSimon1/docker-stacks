console.log("Neue ui.js geladen");

export function renderProfile(profile) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="steam-widget">

      <img
        class="avatar"
        src="${profile.avatar}"
        alt="${profile.name}"
      >

      <div class="content">

        <h2>${profile.name}</h2>

        <p class="status ${profile.status}">
          ${profile.status}
        </p>

        <p class="game">
          ${profile.game ?? "Kein Spiel aktiv"}
        </p>

        <a
          href="${profile.profileUrl}"
          target="_blank"
        >
          Steam Profil
        </a>

      </div>

    </div>
  `;
}