interface ImportMetaEnv {
    API_URL: string;
    MOCK_ENABLE: Boolean;
    API_HOST: string;
    API_PATH: string;
    BASE_URL: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
