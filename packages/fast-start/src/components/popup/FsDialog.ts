import { buildProps } from "@fast-start/utils"
import { dialogEmits, dialogProps } from "element-plus"
import { ExtractPropTypes } from "vue"

export const fsDialogProps = buildProps({
    removeOnClosed: {
        type: Boolean,
        default: true
    },
    ...dialogProps
} as const)

export const fsDialogEmits = {
    ...dialogEmits
}

export type FsDialogProps = ExtractPropTypes<typeof fsDialogProps>

export type FsDialogEmits = typeof fsDialogEmits
