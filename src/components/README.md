## `src/components`

This folder contains **reusable React components** used across pages and modules.

It includes:

- **UI primitives** (building blocks like Button/Input/Card) meant to be reused everywhere.
- **Shared app components** (navigation, menus, reusable sections) that are not tied to a single route.

## Rules when editing this folder

- **No pages here**: route-level screens live in `src/pages`.
- **Prefer UI primitives**: build new UI on top of `src/components/ui` for consistent styling/behavior.
- **Keep components reusable**: avoid hardcoding route-specific assumptions (URLs, route params, page-only state).
- **Typed props**: export clear TypeScript props for every component.
- **Export via the barrel**: expose shared components from `src/components/index.ts` to keep imports consistent.


