import { useDataProviderContext } from "../context/data-provider"
import { BasicRecord, GetOneParams, GetOneResult } from "./types"
import { useHttp } from "./useHttp"

export const useGetOne = <RecordType extends BasicRecord = any>(
    resource: string,
    immediate = true
) => {
    const { getOne } = useDataProviderContext()

    const result = useHttp({
        immediate,
        queryFn: (params: GetOneParams) => {
            return getOne<RecordType>(resource, params)
        }
    })

    const getOneData = result.execute<RecordType>

    return { ...result, getOneData }
}
