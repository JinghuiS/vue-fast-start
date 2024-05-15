// https://vitepress.dev/guide/custom-theme
import "element-plus/dist/index.css"
import "@fast-start/core/style.css"
import ElementPlus from "element-plus"
import FastStartCore from "@fast-start/core"

import { App, Component, h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"

import "./style.css"
import "./prism.css"
import Layout from "./Layout.vue"

type Module = { [key: string]: any }

//@ts-ignore
const modules = import.meta.glob(["./examples/**/*.vue", "./components/**/*.vue"], {
    eager: true
})

const components: Component[] = []

for (const path in modules) {
    components.push((modules[path] as Module).default)
}

export default {
    extends: DefaultTheme,
    //@ts-ignore
    Layout,
    //@ts-ignore
    enhanceApp({ app }: { app: App }) {
        //@ts-ignore
        app.use(ElementPlus)
        //@ts-ignore
        app.use(FastStartCore)
        components.forEach((component) => {
            if (component.name) {
                app.component(component.name, component)
            }
        })
        // ...
    }
} satisfies Theme
