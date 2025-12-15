/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

interface ImportMetaEnv {
  readonly VITE_APP_URL?: string
  readonly VITE_DEFAULT_LANGUAGE?: string
  readonly VITE_SOCKET_URL?: string
  readonly [key: string]: any
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
