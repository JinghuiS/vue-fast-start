import fs from "node:fs"
import path from "node:path"

interface Api {
    apiName: string
    apiRawData: string
}

declare const data: Api[]
export { data }

/**
 * https://vitepress.dev/guide/data-loading#data-from-local-files
 *
 * 参考 https://github.com/vuejs/blog/blob/main/.vitepress/theme/posts.data.ts
 * 仅在构建时加载所有示例的 rawData
 */
export default {
    watch: ["../examples/**/*.ts"],

    load(watchedFiles: string[]) {
        return watchedFiles.map((file) => {
            const relativePath = path.relative(path.resolve(__dirname, "../examples"), file)

            const filename = relativePath.split(path.sep).join("-")

            const { name } = path.parse(filename)

            const content = fs.readFileSync(file, "utf-8")

            return {
                apiName: `ex-${name}`,
                apiRawData: content.toString()
            }
        })
    }
}
