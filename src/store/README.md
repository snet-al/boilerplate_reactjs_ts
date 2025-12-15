## `src/store`

This folder contains the app’s **global state management** (Redux Toolkit).

Use it for **cross-route, shared state** (e.g. authentication/session, current user, feature flags). Local UI state should stay inside components or feature modules.

## Rules when editing this folder

- **Only store truly global state**: if a state is used by one screen/component, keep it local.
- **Keep state serializable**: no Promises, class instances, DOM nodes, etc.
- **Prefer slices**: model state using Redux Toolkit slices in `redux/slices`.
- **Async work lives outside reducers**: use services; reducers should stay synchronous.
- **Use typed hooks**: components should use the typed hooks from `redux/hooks.ts`.

