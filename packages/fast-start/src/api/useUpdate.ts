import { useDataProviderContext } from "../context/data-provider"
import { useTransition } from "../hooks"
import { BasicRecord, UpdateParams } from "./types"

export const useUpdate = <RecordType extends BasicRecord = any>(resource: string) => {
    const { update } = useDataProviderContext()
    const { start, isLoading } = useTransition()

    const sendUpdate = async <Req extends BasicRecord = RecordType>(
        params: UpdateParams<RecordType>
    ) => {
        return await start(() => update<Req>(resource, params))
    }

    return { isLoading, sendUpdate }
}
