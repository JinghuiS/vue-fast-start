import { inject, provide } from "vue"
import type { DataProvider } from "../api/types"
import { defaultDataProvider } from "../api/http/defaultDataProvider"
export const DATA_PROVIDER_CONTEXT = Symbol("DATA_PROVIDER_CONTEXT")

export const createDataProviderProvider = (context: DataProvider) => {
    return provide(DATA_PROVIDER_CONTEXT, context)
}

export const useDataProviderContext = () => {
    return inject<DataProvider>(DATA_PROVIDER_CONTEXT, defaultDataProvider)
}
