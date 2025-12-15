# React + TypeScript Boilerplate

This project was originally bootstrapped with **Create React App (CRA)** and is now set up to run with **Vite**.

## Requirements

- Node.js + npm

## Setup

```bash
npm install
```

## Commands

```bash
# dev server
npm run dev

# production build
npm run build

# preview production build
npm run preview

# tests
npm run test
```

## Environment variables (Vite)

Vite exposes env vars prefixed with `VITE_`. Common ones used in this repo:

- `VITE_APP_URL`
- `VITE_SOCKET_URL`
- `VITE_DEFAULT_LANGUAGE`

## Folder guide (read the README in each folder)

Most `src/*` folders include a short `README.md` with definitions + rules. Start with:

- `src/navigator/README.md`
- `src/pages/README.md`
- `src/modules/README.md`
- `src/services/README.md`
- `src/store/README.md`
- `src/libs/README.md`
- `src/layouts/README.md`
- `src/guards/README.md`
- `src/components/README.md`

### `src` structure (quick table)

| Folder | Role | Description |
| --- | --- | --- |
| `assets` | **media** | Static assets (icons/images) imported by the app. |
| `components` | **reusable** | Shared React components (including UI primitives) used across screens. |
| `guards` | **access** | Route guard components for auth/redirect rules. |
| `layouts` | **shells** | App layout wrappers that provide shared structure around pages. |
| `libs` | **infrastructure** | Low-level wrappers for external clients (HTTP, sockets, etc.). |
| `modules` | **features** | Feature modules used when a page becomes complex (state/flows/sub-components). |
| `navigator` | **routing** | Central route table (React Router routes + guards + layout wiring). |
| `pages` | **screens** | Route-level screens that call services and render the UI. |
| `services` | **api** | Domain API services that map backend entities/contexts to typed methods. |
| `store` | **state** | Global Redux Toolkit store for cross-route state. |
| `types` | **typing** | Shared TypeScript types/interfaces used across the app. |
| `utils` | **helpers** | Small pure helpers/constants reused across the codebase. |


