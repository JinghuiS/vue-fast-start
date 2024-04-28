import { Ref, ref, toValue } from "vue"

import type { TableInstance } from "element-plus"

export type FsDataTableInstance = {
    tableInstance: TableInstance
    setFilter: (filter: any) => void
    reload: () => void
    filter: Readonly<Ref<any>>
    multipleSelection: Ref<any[]>
    clearSelection: () => void
    toggleSelection: (rows: any[]) => void
    rowKey: string
}

export const useFsDataTable = () => {
    const fsDataTable = ref<FsDataTableInstance>()
    return [fsDataTable]
}
