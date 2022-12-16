interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_MOCK_ENABLE: Boolean
  VITE_API_HOST: string
  VITE_API_PATH: string
  VITE_BASE_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
