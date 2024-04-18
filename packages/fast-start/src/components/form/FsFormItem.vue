<script setup lang="ts">
import { ElFormItem, type FormItemProps } from "element-plus"
import { useFormContext } from "../../context/form"
import { type InputBindsConfig } from "vee-validate"
import { computed, useSlots } from "vue"
defineOptions({
    name: "FsFormItem",
    inheritAttrs: true
})

interface FsFormItemProps extends Partial<FormItemProps> {
    prop: string
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

const filed = takeOverChild()
</script>
<template>
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
