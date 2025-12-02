## Modules overview

`src/modules` houses feature-focused building blocks that sit between pages and
low-level services. A module encapsulates everything a complex page or feature
needs (components, hooks, forms, state, API glue) so the page can stay lean.

Think of a module as the “engine room” for a page section—ideal when a page
would otherwise become unwieldy (e.g., a 5-step create-account flow). Each step
or logical slice can live inside the module while the page composes them.

### When to create a module

- A page has multiple steps or sub-flows (multi-step forms, dashboards with
  widgets, etc.).
- Domain logic or form state needs to be shared by multiple pages/routes.
- You want to encapsulate a feature so the rest of the app imports a single,
  well-defined API.

### Rules / guidelines

1. Modules expose only what a page needs (components, hooks, helpers) via an
   `index.ts` barrel; keep internal implementation private.
2. Keep modules united: if two features rarely overlap, separate them instead
   of building a “mega module.”
3. Place any module-specific services or state alongside the module, not in
   global folders, unless they’re reused elsewhere.
4. Keep React pages thin: pages should orchestrate layout, routing, and module
  composition, delegating heavy logic to modules.
5. Reuse UI primitives from `src/components/ui` to maintain consistent styling
   across modules.

