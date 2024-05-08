import { Ref, ref } from "vue"

export type FsDataInstance<T> = {
    setFilter: (filter: any) => void
    reload: () => void
    reset: () => void
    setPagination: (pagination: Partial<{ page: number; perPage: number }>) => void
    filter: Readonly<Ref<any>>
    rowKey?: string
    loading: Ref<boolean>
    data: Ref<T>
}

export const useFsData = <DataType = any[]>() => {
    const fsData = ref<FsDataInstance<DataType>>()
    return [fsData]
}
