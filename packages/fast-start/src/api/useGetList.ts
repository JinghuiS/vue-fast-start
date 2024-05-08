import { computed } from "vue"
import { useDataProviderContext } from "../context/data-provider"
import { useFastStartContext } from "../context/fast-start"
import { defaultSort, defaultFilter } from "./consts"
import type { BasicRecord, GetListParams, GetListResult } from "./types"
import { useHttp } from "./useHttp"
import { useRouter } from "vue-router"

export const useGetList = <RecordType extends BasicRecord = any>(
    resource: string,
    params: Partial<GetListParams>,
    immediate?: boolean
) => {
    const { pagination = { page: 1, perPage: 20 }, filter = defaultFilter } = params

    const dataProvider = useDataProviderContext()

    const fastStarContext = useFastStartContext()

    const result = useHttp<GetListResult<RecordType>>({
        immediate: immediate,
        // queryKey: [filter, resource, pagination],
        queryFn: (p: GetListParams) => {
            return new Promise((resolve, reject) => {
                dataProvider!
                    .getList<RecordType>(
                        resource,
                        p
                            ? p
                            : {
                                  pagination,
                                  filter
                              }
                    )
                    .then(({ data, total }) => ({
                        data,
                        total
                    }))
                    .then(resolve)
                    .catch(reject)
            })
        },
        initialData: {
            data: [],
            total: 0
        }
    })

    const data = computed(() => result.data.value.data)
    const total = computed(() => result.data.value.total)

    return {
        ...result,
        data,
        total
    }
}
