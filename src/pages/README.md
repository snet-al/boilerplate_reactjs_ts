## Pages overview

`src/pages` contains the top-level route components rendered by the router.
Pages wire layouts, modules, and UI primitives together to deliver a complete
screen. They orchestrate data fetching and module composition but should avoid
heavy business logic themselves.

### Responsibilities

- Define the route-level UI and decide which layout to use.
- Compose modules (e.g., multi-step flows) and UI components.
- Trigger data fetching via services and pass results to children.
- Handle page-level side effects (title, meta tags) when needed.

### Rules / guidelines

1. Keep pages thin: delegate complex logic, forms, and state to modules or
   services.
2. Each page should live in its own folder (for co-located tests, styles, etc.);
   export a single component from `index.tsx` or `Page.tsx`.
4. Import UI primitives from `src/components/ui` to ensure consistent styling.
5. Prefer declarative routing: pages should read params/query via router hooks
   and pass them down rather than constructing URLs manually.

