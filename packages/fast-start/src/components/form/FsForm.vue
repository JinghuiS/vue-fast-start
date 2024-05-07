<script setup lang="ts">
import { ElForm, ElRow, FormProps } from "element-plus"
import { useForm, type FormOptions } from "vee-validate"
import { createFormProvider } from "../../context/form"
import { computed } from "vue"
import { If } from "@fast-start/control-flow"
import { FsFormPropsWithEl } from "."

defineOptions({
    name: "FsForm"
})

const props = defineProps<FsFormPropsWithEl>()
const veForm = useForm(props)
createFormProvider({ ...veForm, row: props.row, layout: props.layout })
defineExpose({ ...veForm })

const elFormProps = computed<Partial<FormProps>>(() => {
    return {
        inline: props.inline,
        labelPosition: props.labelPosition || "right",
        labelWidth: props.labelWidth,
        labelSuffix: props.labelSuffix,
        hideRequiredAsterisk: props.hideRequiredAsterisk,
        requireAsteriskPosition: props.requireAsteriskPosition || "left",
        disabled: props.disabled,
        size: props.size,
        showMessage: props.showMessage || true,
        inlineMessage: props.inlineMessage,
        statusIcon: props.statusIcon,
        validateOnRuleChange: props.validateOnRuleChange || true,
        scrollToError: props.scrollToError,
        scrollIntoViewOptions: props.scrollIntoViewOptions
    }
})

const gutter = computed(() => {
    return props.layout?.gutter || 0
})
</script>

<template>
    <ElForm v-bind="elFormProps">
        <If :when="row">
            <ElRow :gutter="gutter">
                <slot v-bind="veForm" />
            </ElRow>

            <template #fallback>
                <slot v-bind="veForm" />
            </template>
        </If>
    </ElForm>
</template>
