# Homarr Steam Widget

A lightweight Steam profile widget for Homarr, built with Node.js and Express.

> **Project Status:** 🚧 Early Development (v0.4.0)

---

## Features

* Steam Web API integration
* REST API backend
* Memory cache with configurable TTL
* Clean service-oriented architecture
* Responsive frontend
* Ready for Homarr iframe integration
* Environment-based configuration
* Docker support

---

## Preview

*Currently under development.*

---

## Project Structure

```text
src/
├── cache/
│   └── memoryCache.js
├── config/
│   ├── env.js
│   └── index.js
├── core/
│   └── steam/
│       ├── steamClient.js
│       ├── steamMapper.js
│       ├── steamService.js
│       └── steamStatus.js
├── routes/
│   ├── health.js
│   └── steam.js
└── utils/
    └── logger.js

public/
├── assets/
├── css/
│   └── styles.css
├── js/
│   ├── api.js
│   ├── app.js
│   └── ui.js
└── index.html
```

---

## Requirements

* Node.js 22 LTS or newer
* Steam Web API Key
* SteamID64

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-account>/homarr-steam-widget.git

cd homarr-steam-widget
```

Install dependencies:

```bash
npm install
```

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file:

```dotenv
PORT=3000

STEAM_API_KEY=YOUR_API_KEY

STEAM_ID=YOUR_STEAMID64

CACHE_SECONDS=30
```

---

## Development

Start the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

---

## API

### Health

```
GET /api/v1/health
```

Example response:

```json
{
  "status": "ok"
}
```

---

### Steam Profile

```
GET /api/v1/steam
```

Example response:

```json
{
  "success": true,
  "meta": {
    "cached": false
  },
  "data": {
    "steamId": "SteamId",
    "name": "Steam NAme",
    "avatar": "...",
    "status": "offline",
    "game": null,
    "profileUrl": "...",
    "lastUpdated": "2026-07-07T21:04:22.022Z"
  }
}
```

---

## Configuration

| Variable      | Description       | Default  |
| ------------- | ----------------- | -------- |
| PORT          | HTTP server port  | 3000     |
| STEAM_API_KEY | Steam Web API key | required |
| STEAM_ID      | SteamID64         | required |
| CACHE_SECONDS | Cache lifetime    | 30       |

---

## Scripts

```bash
npm run dev
```

Start development mode.

```bash
npm start
```

Start production mode.

```bash
npm run lint
```

Run ESLint.

```bash
npm run lint:fix
```

Automatically fix lint issues.

```bash
npm run format
```

Format the project using Prettier.

## Screenshots

### Browser
![Chrome](screenshots/Example_Screenshot_Chrome.jpg?raw=true)

### Homarr
![Homarr](screenshots/Example_Screenshot_Homarr.jpg?raw=true)

---

## Roadmap

### v0.5

* Automatic refresh
* Improved widget design
* Loading animation
* Error handling
* Better status indicators

### v0.6

* Recently played games
* Steam level
* Friends online
* Achievement statistics

### v0.7

* Native Homarr styling
* Dark/Light theme support
* Configurable layout
* Widget customization

---

## Contributing

Contributions, bug reports and feature requests are welcome.

Please open an issue before implementing larger changes.

---

## License

MIT License
