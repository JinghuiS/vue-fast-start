import { buildProps, definePropType } from "@fast-start/utils"
import { ExtractPropTypes } from "vue"

export interface FsFilterDataItem {
    /**
     * 选项对应的值，唯一 id
     */
    id: string
    /**
     * 节点标题
     */
    title?: string
    /**
     * 是否禁用
     */
    disabled?: boolean
    /**
     * 级联筛选项列表
     */
    children?: FsFilterDataItem[]
}
const DEFAULT_DATA = [] as []
const DEFAULT_VALUE = [] as []
const DEFAULT_LABEL = [] as []

export const useFilterProps = buildProps({
    /**
     * 	筛选标题列表
     */
    label: {
        type: definePropType<string[]>(Array),
        default: () => DEFAULT_LABEL as string[]
    },
    /**
     * 筛选选项数据
     */
    data: {
        type: definePropType<FsFilterDataItem[]>(Array),
        default: () => DEFAULT_DATA as FsFilterDataItem[]
    },
    /**
     * 默认选中项的值
     */
    defaultValue: {
        type: definePropType<string[]>(Array),
        default: () => DEFAULT_VALUE as string[]
    }
} as const)

export type UseFilterProps = ExtractPropTypes<typeof useFilterProps>

export const fsFilterProps = buildProps({
    ...useFilterProps,
    /**
     * 筛选表头选择时形状
     */
    appearance: {
        type: definePropType<FsFilterAppearance>(String),
        default: "link"
    },
    /**
     * 是否显示下划线
     */
    showUnderline: {
        type: definePropType<boolean>(Boolean),
        default: false
    },
    /**
     * 筛选标题宽度
     */
    labelWidth: {
        type: definePropType<number>(Number),
        default: 80
    },
    role: {
        type: definePropType<string>(String),
        default: "menu"
    }
} as const)

export const fsFilterItemProps = buildProps({
    label: {
        type: definePropType<string>(String)
    },
    labelWidth: {
        type: definePropType<number>(Number),
        default: 80
    },
    /**
     * 筛选表头选择时形状
     */
    appearance: {
        type: definePropType<FsFilterAppearance>(String),
        default: "link"
    },
    /**
     * 是否显示下划线
     */
    showUnderline: {
        type: definePropType<boolean>(Boolean),
        default: false
    },
    /**
     * 筛选选项数据
     */
    data: {
        type: definePropType<FsFilterDataItem[]>(Array),
        default: () => DEFAULT_DATA as FsFilterDataItem[]
    },
    /**
     * 默认选中项的值
     */
    defaultValue: {
        type: definePropType<string[]>(Array),
        default: () => DEFAULT_VALUE as string[]
    }
} as const)
export type FsFilterItemProps = ExtractPropTypes<typeof fsFilterItemProps>

export type FsFilterProps = ExtractPropTypes<typeof fsFilterProps>
export type FsFilterAppearance = "link" | "filled"

export const fsFilterEmits = {
    /**
     * 选择时的回调函数，	value 表示选中项的 ID 集合
     */
    change: (value: string[], targetItem: FsFilterDataItem) => true
}

export type FsFilterEmits = typeof fsFilterEmits
