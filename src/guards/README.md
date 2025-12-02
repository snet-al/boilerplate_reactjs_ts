## Guards overview

`src/guards` contains route-level guard components that decide whether a child
tree should render based on authentication status (or other global conditions).
Use them alongside layouts/routes to centralize access control logic.

### Components

- `PrivateGuard` – renders children only when `isLoggedIn()` is true; otherwise
  redirects to `/login` (or a custom `redirectTo`).
- `PublicGuard` – prevents authenticated users from visiting public routes by
  redirecting them to `/` (or a custom `redirectTo`).

### Rules / guidelines

1. Guards must stay framework-specific but feature-agnostic: no data fetching or
   module logic—only access checks and redirects.
2. Accept `children` and optional `redirectTo` props so routes can override the
   default destination.
3. Prefer reusing helpers from `src/utils` (e.g., `isLoggedIn`) instead of
   duplicating auth checks.
4. Keep guard side effects minimal; use router state to pass along the origin
   when redirecting.
5. Export guards via `src/guards/index.ts` to provide a single import surface.

