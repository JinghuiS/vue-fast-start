import { FormOptions } from "vee-validate"
import FsForm from "./FsForm.vue"
import FsFormItem from "./FsFormItem.vue"
import FsSearchForm from "./FsSearchForm.vue"
import { useFsForm } from "./useFsForm"
import type { FormProps } from "element-plus"
export { FsForm, FsFormItem, useFsForm, FsSearchForm }

export interface FsFormLayoutProps {
    gutter?: number
    span?: number
    offset?: number
    push?: number
    pull?: number
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
}

export interface FsFormProps extends FormOptions<any> {
    row?: boolean
    layout?: Partial<FsFormLayoutProps>
}

export type FsFormPropsWithEl = FsFormProps & Partial<FormProps>
