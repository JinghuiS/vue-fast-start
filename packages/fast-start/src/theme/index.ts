import { useCssVar } from "@vueuse/core"
import { colorVar } from "./color"
import { textVar } from "./text"

const theme = [
    {
        name: "color",
        value: colorVar
    },
    {
        name: "text",
        value: textVar
    }
]

export const initTheme = () => {
    const el = document.documentElement
    for (const item of theme) {
        for (const cssVar of item.value) {
            el.style.setProperty(`--el-${item.name}-${cssVar.name}`, cssVar.value)
        }
    }
}
