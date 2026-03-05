import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";
import { compression, defineAlgorithm } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    analyzer({
      analyzerMode: "static",
      openAnalyzer: false,
      reportTitle: "Análisis del Bundle",
      fileName: "bundle-report.html",
    }),
    compression({
      algorithms: [
        "gzip",
        "brotliCompress",
        defineAlgorithm("deflate", { level: 9 }),
      ],
    }),
    checker({ typescript: true }),
  ],
});
