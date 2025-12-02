## Layout components

The `src/layouts` directory contains route-level shells that wrap
pages with shared chrome, navigation, and access control. Layouts define the
overall structure (headers, sidebars, footers, guards) while delegating
page-specific UI to their children.

### Current layouts

- `AppShellLayout` – permanent drawer layout built on the shared `SideMenu`
  component, ideal for domain pages that share a navigation tree.

### Rules / guidelines

1. Keep layouts focused on structural chrome; feature logic and API calls belong
   in pages or modules.
2. Layouts should accept `children` and stay agnostic of the page content they
   wrap.
3. Reuse shared UI primitives from `src/components/ui` (buttons, inputs, etc.)
   instead of re-implementing them.
4. Extract shared sections (e.g., headers, nav items) into reusable components
   when multiple layouts need them.
5. Keep layout-specific state minimal and generic (e.g., drawer toggles). Route
   or feature state should live closer to the relevant module/page.
6. Export layouts through an index file to provide consistent import paths
   across the app.

