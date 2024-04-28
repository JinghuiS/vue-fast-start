import { injectLocal, provideLocal } from "@vueuse/core"
import { FsDataTableInstance } from "../components"

export const FS_DATA_TABLE_PROVIDER_CONTEXT = Symbol("FORM_PROVIDER_CONTEXT")

export const createFsDataTableProvider = (context: FsDataTableInstance) => {
    return provideLocal<FsDataTableInstance>(FS_DATA_TABLE_PROVIDER_CONTEXT, context)
}

export const useFsDataTableContext = () => {
    return injectLocal<FsDataTableInstance>(FS_DATA_TABLE_PROVIDER_CONTEXT)
}
