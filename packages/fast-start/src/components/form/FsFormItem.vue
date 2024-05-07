<script setup lang="ts">
import { ElCol, ElFormItem, type FormItemProps } from "element-plus"
import { useFormContext } from "../../context/form"
import { type InputBindsConfig } from "vee-validate"

import { computed, useSlots } from "vue"
import { If } from "@fast-start/control-flow"
defineOptions({
    name: "FsFormItem",
    inheritAttrs: true
})

interface FsFormItemProps extends Partial<FormItemProps> {
    prop: string
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

const props = defineProps<FsFormItemProps>()
const slots = useSlots()

const formContext = useFormContext()

const elPlusConfig = (state: any) => ({
    props: {
        validateEvent: false,
        error: state.errors[0]
        // required: state.required
    }
})

const [value, config] = formContext!.defineField(props.prop, elPlusConfig)

function getChildren() {
    return slots.default ? slots.default() : null
}

const takeOverChild = () => {
    let children = getChildren()
    if (!children) {
        return
    }

    if (!Array.isArray(children)) {
        children = [children]
    }

    const fieldComp = children[0]

    // if (fieldComp.props && fieldComp.props["modelValue"]) {
    //     fieldComp.props["modelValue"] = value.value
    // }
    // if (fieldComp.props && fieldComp.props["onUpdate:modelValue"]) {
    //     fieldComp.props["onUpdate:modelValue"] = (v: any) => {
    //         value.value = v
    //     }
    // }

    return fieldComp
}

const colProps = computed(() => {
    return {
        span: props.span || formContext?.layout?.span,
        offset: props.offset || formContext?.layout?.offset,
        push: props.push || formContext?.layout?.push,
        pull: props.pull || formContext?.layout?.pull,
        xs: props.xs || formContext?.layout?.xs,
        sm: props.sm || formContext?.layout?.sm,
        md: props.md || formContext?.layout?.md,
        lg: props.lg || formContext?.layout?.lg,
        xl: props.xl || formContext?.layout?.xl
    }
})

const filed = computed(() => takeOverChild())
</script>
<template>
    <If :when="formContext?.row">
        <ElCol v-bind="colProps">
            <ElFormItem
                :label="label"
                :label-width="labelWidth"
                :size="size"
                :validate-status="validateStatus"
                :required="required"
                v-bind="config"
            >
                <component :is="filed" v-model="value" />
            </ElFormItem>
        </ElCol>

        <template #fallback>
            <ElFormItem
                :label="label"
                :label-width="labelWidth"
                :size="size"
                :validate-status="validateStatus"
                :required="required"
                v-bind="config"
            >
                <component :is="filed" v-model="value" />
            </ElFormItem>
        </template>
    </If>
</template>
