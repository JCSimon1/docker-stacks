const session = {
  currentGame: null,
  gameStartedAt: null,

  currentStatus: null,
  statusChangedAt: null
};

export function getSession() {
  return session;
}

export function updateSession(profile) {
  //
  // Spielwechsel erkennen
  //
  if (profile.game !== session.currentGame) {
    session.currentGame = profile.game;
    session.gameStartedAt = profile.game
      ? new Date()
      : null;
  }

  //
  // Statuswechsel erkennen
  //
  if (profile.status !== session.currentStatus) {
    session.currentStatus = profile.status;
    session.statusChangedAt = new Date();
  }

  return session;
}