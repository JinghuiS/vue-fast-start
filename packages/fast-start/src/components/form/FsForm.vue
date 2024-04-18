<script setup lang="ts">
import { ElForm, FormProps } from "element-plus"
import { useForm, type FormOptions } from "vee-validate"
import { createFormProvider } from "../../content/form"
import { computed } from "vue"
defineOptions({
    name: "FsForm"
})
interface FsFormProps extends FormOptions<any> {}

type FsFormPropsWithEl = FsFormProps & Partial<FormProps>

const props = defineProps<FsFormPropsWithEl>()
const veForm = useForm(props)
createFormProvider(veForm)
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
</script>

<template>
    <ElForm v-bind="elFormProps">
        <slot v-bind="veForm" />
    </ElForm>
</template>
