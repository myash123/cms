/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REGISTER_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
