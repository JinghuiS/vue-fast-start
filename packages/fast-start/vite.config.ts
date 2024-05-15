import { fileURLToPath, URL } from "node:url"

import { defineConfig, build } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import dts from "vite-plugin-dts"

import * as path from "path"

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es", "cjs"],
            name: "fast-start-core",
            // the proper extensions will be added
            fileName: "fast-start-core"
        },
        rollupOptions: {
            external: ["vue", "vue-router", "element-plus"],
            output: {
                // preserveModules: true,
                // exports: "named",
                preserveModulesRoot: path.resolve(__dirname, "src/index.ts"),
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "Vue",
                    "vue-router": "VueRouter",
                    "element-plus": "ElementPlus"
                }
            }
        }
    },
    resolve: {
        alias: {
            "@fast-start/utils": fileURLToPath(new URL("../utils", import.meta.url))
            // "@src": path.resolve(__dirname, "..","utils")
        }
    },
    plugins: [
        dts({
            outDir: "dist/es",
            tsconfigPath: path.resolve(__dirname, "tsconfig.esm.json"),
            entryRoot: "src"
            // insertTypesEntry: true,
            // staticImport: true
            // rollupTypes: true,
            // bundledPackages: ["vue", "vue-router", "element-plus"]
        }),
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })
    ],
    optimizeDeps: {
        needsInterop: []
    }
})
