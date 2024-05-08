<script setup lang="ts">
import { Search, Filter } from "@element-plus/icons-vue"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import { computed } from "vue"
import { useSlots } from "vue"
import FsForm from "./FsForm.vue"

import { ElForm, ElFormItem, type ElButton, type FormProps } from "element-plus"
import { useFsForm } from "./useFsForm"
import { FsFormPropsWithEl } from "."
defineOptions({
    name: "FsSearchForm"
})
interface FsSearchFormProps extends FsFormPropsWithEl {
    loading: boolean
}

defineProps<FsSearchFormProps>()

const emits = defineEmits<{
    search: [values: any]
    reset: [values: any]
}>()

const slots = useSlots()
function getChildren() {
    return slots.default ? slots.default() : null
}

const cols = { sm: 24, md: 12, lg: 8, xl: 6, "2xl": 4 }
const breakpoints = useBreakpoints(breakpointsTailwind)

const multipleRows = computed(() => {
    let children = getChildren()
    if (!children) {
        return
    }

    if (!Array.isArray(children)) {
        children = [children]
    }
    console.log(
        cols[(breakpoints.active().value as keyof typeof cols) || "sm"],
        children.length >= 24 / cols[(breakpoints.active().value as keyof typeof cols) || "sm"]
    )

    return children.length >= 24 / cols[(breakpoints.active().value as keyof typeof cols) || "sm"]
})

const [fsForm] = useFsForm<any>()

const resetButtonStyle = {
    marginLeft: "18px",
    marginTop: 0
}

function search() {
    fsForm.value?.validate().then((res) => {
        emits("search", res)
    })
}

function reset() {
    fsForm.value?.resetForm()
    emits("reset", fsForm.value?.values)
}

// defineExpose({ ...fsForm })
defineExpose({ ...fsForm.value })
</script>
<template>
    <div class="fast-start-search-form-wrapper">
        <FsForm
            class="fast-start-search-form"
            ref="fsForm"
            v-bind="$props"
            row
            :layout="{
                gutter: 8,
                ...cols
            }"
            inline
            v-slot="fsExports"
        >
            <slot v-bind="fsExports" />
        </FsForm>

        <div
            class="fast-start-search-form-right-buttons"
            :style="{
                display: 'flex',
                flexDirection: multipleRows ? 'column' : 'row'
            }"
        >
            <ElButton
                v-loading="loading"
                :icon="Search"
                type="primary"
                aria-label="搜索"
                @click="search"
                >搜索</ElButton
            >
            <ElButton
                v-loading="loading"
                :icon="Filter"
                :style="multipleRows ? {} : resetButtonStyle"
                @click="reset"
                >重置</ElButton
            >
        </div>
    </div>
</template>

<style>
.fast-start-search-form-wrapper {
    display: flex;
    width: 100%;
    border-bottom: 1px dashed var(--el-border-color-lighter);
    transition: all 0.3s;
}
.fast-start-search-form {
    flex: 1;
}
.fast-start-search-form .el-form-item {
    width: 100%;
}

.fast-start-search-form-right-buttons {
    margin-left: 18px;
    width: 180px;
    text-align: center;
    padding-left: 20px;
    border-left: 1px dashed var(--el-border-color-lighter);
    box-sizing: border-box;
    margin-bottom: 20px;
}
.fast-start-search-form-right-buttons .el-button {
    width: 100%;
}
.fast-start-search-form-right-buttons .el-button + .el-button {
    margin-left: 0;
    margin-top: 18px;
}
</style>
