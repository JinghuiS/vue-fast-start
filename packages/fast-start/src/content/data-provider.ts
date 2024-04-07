import { inject, provide } from "vue"
import type { DataProvider } from "../api/types"
import { defaultDataProvider } from "../api/http/defaultDataProvider"
export const DATA_PROVIDER_CONTEXT = Symbol("DATA_PROVIDER_CONTEXT")

export const createDataProviderProvider = (content: DataProvider) => {
    return provide(DATA_PROVIDER_CONTEXT, content)
}

export const useDataProviderContext = () => {
    return inject<DataProvider>(DATA_PROVIDER_CONTEXT, defaultDataProvider)
}
