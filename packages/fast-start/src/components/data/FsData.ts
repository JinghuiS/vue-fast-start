import { buildProps, definePropType } from "@fast-start/utils"

import { paginationProps } from "element-plus"
import { DataProvider } from "../../api"
import { ExtractPropTypes, computed } from "vue"
import FsData from "./FsData.vue"
export interface PaginationType {
    page?: number
    perPage?: number
    show?: boolean
    layout?: string
}

export const fsDataProps = buildProps({
    immediate: {
        type: Boolean,
        default: true
    },
    rowKey: {
        type: String
    },
    defaultFilter: {
        type: Object
    },
    request: {
        type: definePropType<DataProvider["getList"]>(Function)
    },
    pagination: {
        type: definePropType<PaginationType>([Object]),
        default: () => ({} as PaginationType)
    }
} as const)

export const defaultFsDataPaginationProps: Partial<FsDataProps["pagination"]> = {
    page: 1,
    perPage: 10,
    show: true,
    layout: "total, prev, pager, next"
}

export const useFsDataPaginationConfig = (props: FsDataProps) => {
    return computed(() => {
        return {
            ...defaultFsDataPaginationProps,
            ...props.pagination
        }
    })
}

export type FsDataProps = ExtractPropTypes<typeof fsDataProps>

// export type FsDataInstance = InstanceType<typeof FsData>
