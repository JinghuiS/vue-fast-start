import { type Component, inject, provide } from "vue"
import type { DataProvider } from "../api/types"
import { FSMenuType } from "../store/menu"
import { injectLocal, provideLocal } from "@vueuse/core"

export type FastStarProps = {
    title?: string
    rowKey?: string
    basename?: string
    dataProvider?: DataProvider
    routerMode?: "hash" | "history"
    // authProvider?: AuthProvider
    layout?: Component
    useTheme?: boolean
    menu?: FSMenuType[]
}

export const DEFAULT_FAST_START_CONTEXT: FastStarProps = {
    rowKey: "id",
    title: "Fast Start",
    routerMode: "hash",
    basename: "/"
}
export const FAST_START_CONTEXT = Symbol("FAST_START_CONTEXT")

export const createFastStartProvider = (context: FastStarProps) => {
    return provideLocal(FAST_START_CONTEXT, context)
}

export const useFastStartContext = () => {
    return injectLocal<FastStarProps>(FAST_START_CONTEXT, DEFAULT_FAST_START_CONTEXT)
}
