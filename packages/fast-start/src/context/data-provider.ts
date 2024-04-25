import { inject, provide } from "vue"
import type { DataProvider } from "../api/types"
import { defaultDataProvider } from "../api/http/defaultDataProvider"
import { injectLocal, provideLocal } from "@vueuse/core"
export const DATA_PROVIDER_CONTEXT = Symbol("DATA_PROVIDER_CONTEXT")

export const createDataProviderProvider = (context: DataProvider) => {
    return provideLocal(DATA_PROVIDER_CONTEXT, context)
}

export const useDataProviderContext = () => {
    return injectLocal<DataProvider>(DATA_PROVIDER_CONTEXT, defaultDataProvider)
}
