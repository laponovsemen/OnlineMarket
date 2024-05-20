import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        svgr({
            exportAsDefault: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
            { find: "@", replacement: "/src" }, // по умолчанию вит не понимает алиасы
        ],
    },
    esbuild: {
        target: "es6",
    },
    define: {
        // для определения глобальных переменных в проекте
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("http://localhost:8000"),
        __PROJECT__: JSON.stringify("frontend"),
    },
});
