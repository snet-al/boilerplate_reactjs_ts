## Store overview

The `src/store` directory hosts Redux state management. It keeps global,
cross-route data (auth, user profile, feature flags) in one predictable place.

### Structure

- `redux/store.ts` – configures the Redux Toolkit store.
- `redux/slices/` – feature slices (e.g., `authSlice`) that define state +
  reducers.
- `redux/hooks.ts` – typed `useDispatch`/`useSelector` helpers for components.
- `redux/index.ts` – single entry point exporting the store, hooks, and types.

### Rules / guidelines

1. Prefer Redux Toolkit slices over handwritten reducers.
2. Keep slice state serializable; do not store Promises, DOM nodes, etc.
3. Handle async work with thunks, RTK Query, or external services—slices should
   stay synchronous.
4. Export slices via their own files and include them in `store.ts`; avoid
   creating monolithic reducers.
5. Only place truly global state here. Local UI state still belongs inside
   components or feature modules.

