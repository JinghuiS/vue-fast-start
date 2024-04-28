import { useDataProviderContext } from "../context/data-provider"
import { BasicRecord, UpdateParams } from "./types"
import { useHttp } from "./useHttp"

export const useUpdate = <RecordType extends BasicRecord = any>(
    resource: string,
    immediate = false
) => {
    const { update } = useDataProviderContext()
    const result = useHttp({
        immediate: immediate,
        queryFn: (params: UpdateParams<any>) => {
            return update<RecordType>(resource, params)
        }
    })

    const sendUpdate = result.execute<UpdateParams<any>>

    return { ...result, sendUpdate }
}
