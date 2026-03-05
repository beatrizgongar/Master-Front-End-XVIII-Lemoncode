/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_ENTORNO: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
