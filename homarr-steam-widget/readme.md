# Homarr Steam Widget

A lightweight Steam profile widget designed for Homarr.

## Features

- Docker ready
- Express backend
- REST API
- Static frontend
- Environment-based configuration

## Development

Install dependencies

```bash
npm install
```

Run lint

```bash
npm run lint
```

Format source

```bash
npm run format
```

## Git Hooks

Nach `npm install` werden Git Hooks automatisch eingerichtet.

Vor jedem Commit werden:

- ESLint
- Prettier

auf den geänderten Dateien ausgeführt.

## Docker

```bash
docker compose up -d
```

Open:
`http://localhost:8047`