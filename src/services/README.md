## Services overview

`src/services` centralizes domain-level API helpers. Each service wraps one or
more endpoints and exposes typed methods that the rest of the app can call
without knowing about HTTP details or third-party clients.

### Responsibilities

- Map domain use-cases (auth, users, etc.) to network calls.
- Reuse shared infrastructure (`src/libs/http`, sockets, etc.) so networking is
  configured consistently.
- Provide typed responses and errors so callers can rely on TypeScript
  contracts.

### Rules / guidelines

1. Services should remain stateless singletons (class instances or plain
   objects) that expose functions returning Promises.
2. Keep service methods lean: no UI logic or component state; just data access
   and basic response mapping.
3. Always use shared clients (`HttpClient`, `SocketClient`, etc.) rather than
   instantiating new ones inside services.
4. Group related endpoints in the same service (e.g., `AuthService`,
   `UserService`); split when responsibilities diverge.

