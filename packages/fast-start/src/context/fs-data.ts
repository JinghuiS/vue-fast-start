import { injectLocal, provideLocal } from "@vueuse/core"
import { FsDataInstance } from "../components"

export const FS_DATA_PROVIDER_CONTEXT = Symbol("FORM_PROVIDER_CONTEXT")

export const createFsDataProvider = (context: FsDataInstance<any>) => {
    return provideLocal<FsDataInstance<any>>(FS_DATA_PROVIDER_CONTEXT, context)
}

export const useFsDataContext = () => {
    return injectLocal<FsDataInstance<any>>(FS_DATA_PROVIDER_CONTEXT)
}
