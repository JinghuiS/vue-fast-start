import { useFastStartContext } from "../context/fast-start"
import { useResourceContext } from "../context/resource"
import { BasicRecord } from "./types"
import { useCreate } from "./useCreate"
import { useDelete } from "./useDelete"
import { useGetOne } from "./useGetOne"
import { useUpdate } from "./useUpdate"

export const useCurd = <
    One extends BasicRecord,
    Create extends BasicRecord,
    Update extends BasicRecord,
    DeleteOne extends BasicRecord
>() => {
    const { name } = useResourceContext()

    const update = useUpdate<Update>(name)
    const deleteOne = useDelete<DeleteOne>(name)
    const create = useCreate<Create>(name)
    const getOne = useGetOne<One>(name)
    return {
        update,
        deleteOne,
        create,
        getOne
    }
}
