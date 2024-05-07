<script setup lang="ts">
import { ElButton, ElPopover, type ButtonProps } from "element-plus"

import { useResourceContext } from "../../../../context/resource"

import { useDelete } from "../../../../api/useDelete"
import { useFsDataContext } from "../../../../context/fs-data"
defineOptions({
    name: "FsTableDelete"
})

export interface FsTableDeleteActionProps {
    params?: any
    label?: string
    buttonType?: ButtonProps["type"]
    title?: string
    custom?: boolean
    row?: any
}

const props = withDefaults(defineProps<FsTableDeleteActionProps>(), {
    label: "删除",

    buttonType: "danger" as ButtonProps["type"],
    title: "确认删除该条数据吗?"
})
const fsDataTableContext = useFsDataContext()

const emit = defineEmits<{
    delete: [row: any]
}>()

const { name } = useResourceContext()

const deleteOne = useDelete(name)

const handleDelete = (row: any) => {
    if (props.custom) {
        emit("delete", row)
    } else {
        deleteOne.sendDelete({ ...row, id: row[fsDataTableContext?.rowKey || "id"] }).then(() => {
            fsDataTableContext?.reload()
        })
    }
}
</script>

<template>
    <ElPopover placement="top">
        <template #reference>
            <ElButton size="small" plain :type="buttonType">
                {{ $props?.label }}
            </ElButton>
        </template>
        <div>
            {{ $props?.title }}
        </div>
        <div class="fast-start-table-delete-button">
            <ElButton
                @click="handleDelete(row)"
                plain
                type="danger"
                size="small"
                :loading="deleteOne.isLoading.value"
                >{{ $props?.label }}
            </ElButton>
        </div>
    </ElPopover>
</template>

<style>
.fast-start-table-delete-button {
    margin-top: 10px;
    text-align: end;
}
</style>
