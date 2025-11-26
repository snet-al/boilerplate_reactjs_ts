## libs overview

`src/libs` hosts low-level clients and shared adapters that wrap external
infrastructure (REST, sockets, analytics, etc.). These helpers centralize the
integration logic so the rest of the app can depend on a single, typed API.

### Current structure

- `http/` – Axios instance with auth/token interceptors plus the `HttpClient`
  facade for `get/post/put/patch/delete`.
- `socket/` – Socket.IO client that wires the auth token and exposes a thin
  `SocketClient` wrapper for `on/off/emit`.

### Rules for this folder

1. Keep modules framework-agnostic; no React hooks or components here.
2. Only place wrappers around third-party libraries or cross-cutting services;
3. Export a single public entry point per lib (class, factory, or functions) to
   avoid multiple competing instances.
5. Provide TypeScript typings for every exported method to keep usage strongly
   typed across the app.
