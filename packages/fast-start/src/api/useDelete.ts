import { useDataProviderContext } from "../context/data-provider"
import { useTransition } from "../hooks"
import { BasicRecord, DeleteParams, UpdateParams } from "./types"
import { useHttp } from "./useHttp"

export const useDelete = <RecordType extends BasicRecord = any>(
    resource: string,
    immediate = false
) => {
    const { start, isLoading } = useTransition()
    const { deleteOne } = useDataProviderContext()

    const sendDelete = async <Req extends BasicRecord = RecordType>(
        params: DeleteParams<RecordType>
    ) => {
        return await start(() => deleteOne<Req>(resource, params))
    }

    return { isLoading, sendDelete }
}
