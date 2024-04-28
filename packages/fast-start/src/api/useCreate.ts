import { useDataProviderContext } from "../context/data-provider"
import { BasicRecord, UpdateParams } from "./types"
import { useHttp } from "./useHttp"

export const useCreate = <RecordType extends BasicRecord = any>(
    resource: string,
    immediate = false
) => {
    const { create } = useDataProviderContext()
    const result = useHttp({
        immediate: immediate,
        queryFn: (params: any) => {
            return create<RecordType>(resource, params)
        }
    })

    const sendCreate = result.execute<any>

    return { ...result, sendCreate }
}
