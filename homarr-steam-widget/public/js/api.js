export async function getSteamProfile() {
  const response = await fetch("/api/v1/steam");

  if (!response.ok) {
    throw new Error("Unable to load Steam profile");
  }

  const { data } = await response.json();

  return data;
}