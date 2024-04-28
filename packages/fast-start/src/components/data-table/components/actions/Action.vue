<script setup lang="ts">
import { ElTableColumn, ElButton, ElPopconfirm, type ButtonProps } from "element-plus"
import { useModal } from "vue-modal-provider"
import { useFsDataTableContext } from "../../../../context/fs-table"
import type { Component } from "vue"
export type ActionType = "popup" | "view"

const props = defineProps<{
    component: Component
    params?: Record<string, any>
    label: string
    row: any
    buttonType: ButtonProps["type"]
}>()

const modal = useModal(props.component)
const fsDataTableContext = useFsDataTableContext()

const show = () => {
    modal.show({ ...props.params, row: props.row }).then(() => {
        fsDataTableContext?.reload()
    })
}
</script>

<template>
    <ElButton size="small" plain :type="buttonType" @click="show"> {{ label }} </ElButton>
</template>
