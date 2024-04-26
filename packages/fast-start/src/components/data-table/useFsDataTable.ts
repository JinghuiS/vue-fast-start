import { Ref, ref, toValue } from "vue"

import type { TableInstance } from "element-plus"

export type FsDataTableInstance = {
    tableInstance: TableInstance
    setFilter: (filter: any) => void
    handlePageChange: () => void
    filter: Readonly<Ref<any>>
    multipleSelection: any[]
    clearSelection: () => void
    toggleSelection: (rows: any[]) => void
}

export const useFsDataTable = () => {
    const fsDataTable = ref<FsDataTableInstance>()
    return [fsDataTable]
}
