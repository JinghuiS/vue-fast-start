import { defineConfig, build } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import * as path from "path"

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es", "cjs"],
            name: "fast-start-control-flow",
            // the proper extensions will be added
            fileName: "fast-start-control-flow"
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                // preserveModules: true,
                // exports: "named",
                preserveModulesRoot: path.resolve(__dirname, "src/index.ts"),
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "Vue"
                }
            }
        }
    },
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })
    ],
    optimizeDeps: {
        needsInterop: []
    }
})
