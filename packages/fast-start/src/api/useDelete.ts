import { useDataProviderContext } from "../context/data-provider"
import { BasicRecord, DeleteParams, UpdateParams } from "./types"
import { useHttp } from "./useHttp"

export const useDelete = <RecordType extends BasicRecord = any>(
    resource: string,
    immediate = false
) => {
    const { deleteOne } = useDataProviderContext()
    const result = useHttp({
        immediate: immediate,
        queryFn: (params: DeleteParams<any>) => {
            return deleteOne<RecordType>(resource, params)
        }
    })

    const sendDelete = result.execute<DeleteParams<any>>

    return { ...result, sendDelete }
}
