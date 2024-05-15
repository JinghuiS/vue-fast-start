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
            name: "fast-start-utils",
            // the proper extensions will be added
            fileName: "fast-start-utils"
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
    plugins: [
        dts({
            outDir: "dist",
            tsconfigPath: path.resolve(__dirname, "tsconfig.esm.json"),
            entryRoot: "src"
            // insertTypesEntry: true,
            // staticImport: true
            // rollupTypes: true,
            // bundledPackages: ["vue", "vue-router", "element-plus"]
        })
    ],
    optimizeDeps: {
        needsInterop: []
    }
})
