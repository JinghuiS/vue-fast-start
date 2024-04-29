// import { useBasename } from './useBasename';

import { useFastStartContext } from "../context/fast-start"

/**

 */
export const useCreatePath = () => {
    // const basename = useBasename();
    const { basename } = useFastStartContext()

    return ({ resource, id, type }: CreatePathParams): string => {
        switch (type) {
            case "list":
                return removeDoubleSlashes(`${basename}/${resource}`)
            case "create":
                return removeDoubleSlashes(`${basename}/${resource}/create`)
            case "edit": {
                if (id == null) {
                    // maybe the id isn't defined yet
                    // instead of throwing an error, fallback to list link
                    return removeDoubleSlashes(`${basename}/${resource}/edit`)
                }
                return removeDoubleSlashes(`${basename}/${resource}/edit/${encodeURIComponent(id)}`)
            }
            case "detail": {
                if (id == null) {
                    // maybe the id isn't defined yet
                    // instead of throwing an error, fallback to list link
                    return removeDoubleSlashes(`${basename}/${resource}/detail`)
                }
                return removeDoubleSlashes(
                    `${basename}/${resource}/detail/${encodeURIComponent(id)}`
                )
            }

            // case "show": {
            //     if (id == null) {
            //         // maybe the id isn't defined yet
            //         // instead of throwing an error, fallback to list link
            //         return removeDoubleSlashes(`${basename}/${resource}`)
            //     }
            //     return removeDoubleSlashes(
            //         `${basename}/${resource}/${encodeURIComponent(id)}/show`
            //     )
            // }
            default:
                return type
        }
    }
}

type AnyString = string & {}
export type CreatePathType = "list" | "edit" | "detail" | "create" | AnyString

export interface CreatePathParams {
    type: CreatePathType
    resource: string
    id?: string | number
}

export const removeDoubleSlashes = (path: string) => path.replace("//", "/")
