import { useDataProviderContext } from "../context/data-provider"
import { useTransition } from "../hooks"
import { BasicRecord, UpdateParams } from "./types"
import { useHttp } from "./useHttp"

export const useCreate = <RecordType extends BasicRecord = any>(resource: string) => {
    const { start, isLoading } = useTransition()
    const { create } = useDataProviderContext()
    const sendCreate = async <Req extends BasicRecord = RecordType>(
        params: UpdateParams<RecordType>
    ) => {
        return await start(() => create<Req>(resource, params))
    }

    return { isLoading, sendCreate }
}
