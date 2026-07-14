export function formatDuration(start) {
  if (!start) {
    return "";
  }

  const seconds = Math.floor(
    (Date.now() - new Date(start)) / 1000
  );

  const minutes = Math.floor(seconds / 60);

  if (minutes < 1) {
    return "seit weniger als einer Minute";
  }

  if (minutes < 60) {
    return `seit ${minutes} Min.`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `seit ${hours} Std.`;
  }

  return `seit ${hours} Std. ${remainingMinutes} Min.`;
}

export function formatLastUpdated(timestamp) {
  if (!timestamp) {
    return "";
  }

  const seconds = Math.floor(
    (Date.now() - new Date(timestamp)) / 1000
  );

  if (seconds < 5) {
    return "gerade eben";
  }

  if (seconds < 60) {
    return `vor ${seconds} Sek.`;
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `vor ${minutes} Min.`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `vor ${hours} Std.`;
  }

  const days = Math.floor(hours / 24);

  return `vor ${days} Tag${days > 1 ? "en" : ""}`;
}