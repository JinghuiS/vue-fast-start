import { type Component, inject, provide } from "vue"
import type { DataProvider } from "../api/types"
import { FSMenuType } from "../store/menu"
import { injectLocal, provideLocal } from "@vueuse/core"

export type FastStarsProps = {
    rowKey?: string
    basename?: string
    dataProvider?: DataProvider
    // authProvider?: AuthProvider
    layout?: Component
    useTheme?: boolean
    menu?: FSMenuType[]
}

export const DEFAULT_FAST_START_CONTEXT: FastStarsProps = {
    rowKey: "id"
}
export const FAST_START_CONTEXT = Symbol("FAST_START_CONTEXT")

export const createFastStartProvider = (context: FastStarsProps) => {
    return provideLocal(FAST_START_CONTEXT, context)
}

export const useFastStartContext = () => {
    return injectLocal<FastStarsProps>(FAST_START_CONTEXT, DEFAULT_FAST_START_CONTEXT)
}
