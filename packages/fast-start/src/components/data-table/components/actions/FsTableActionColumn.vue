<script setup lang="ts">
import {
    ElTableColumn,
    ElButton,
    ElPopconfirm,
    ElPopover,
    type ButtonProps,
    progressProps
} from "element-plus"
import { useRouter } from "vue-router"
import PopupButton from "./Action.vue"
import { If } from "@fast-start/control-flow"
import { useCreatePath } from "../../../../hooks/useCreatePath"
import { useResourceContext } from "../../../../context/resource"
import { useFsDataTableContext } from "../../../../context/fs-table"
import { useDataProviderContext } from "../../../../context/data-provider"
import { useDelete } from "../../../../api/useDelete"
defineOptions({
    name: "FsTableActionColumn"
})

export type ActionType = "view" | "custom"
export interface FsTableActionProps {
    show?: boolean
    type?: ActionType
    params?: any
    label?: string
    buttonType?: ButtonProps["type"]
    component?: any
}
export interface FsTableDeleteActionProps {
    show?: boolean
    params?: any
    label?: string
    buttonType?: ButtonProps["type"]
    title?: string
    custom?: boolean
}

const props = withDefaults(
    defineProps<{
        label: string
        fixed: string | boolean
        width: string
        edit?: FsTableActionProps
        detail?: FsTableActionProps
        delete?: FsTableDeleteActionProps
    }>(),
    {
        fixed: "right",
        width: "150px",
        label: "操作",
        edit: () => {
            return {
                label: "编辑",
                show: true,
                buttonType: "default" as ButtonProps["type"],
                type: "view"
            }
        },
        detail: () => {
            return {
                label: "详情",
                show: false,
                type: "view"
            }
        },
        delete: () => {
            return {
                label: "删除",
                show: true,
                buttonType: "danger" as ButtonProps["type"],
                title: "确认删除该条数据吗?"
            }
        }
    }
)
const fsDataTableContext = useFsDataTableContext()
const dataProvider = useDataProviderContext()
const emit = defineEmits<{
    edit: [row: any]
    delete: [row: any]
    detail: [row: any]
}>()

const createPath = useCreatePath()
const { name } = useResourceContext()
const router = useRouter()

const deleteOne = useDelete(name)

const goEdit = (row: any) => {
    if (props.edit.type === "view") {
        const path = createPath({
            resource: name,
            type: "edit",
            id: row[fsDataTableContext?.rowKey || "id"]
        })

        router.push(path)
    } else {
        emit("edit", row)
    }
}

const goDetail = (row: any) => {
    if (props.detail.type === "view") {
        const path = createPath({
            resource: name,
            type: "detail",
            id: row[fsDataTableContext?.rowKey || "id"]
        })
        router.push(path)
    } else {
        emit("detail", row)
    }
}

const handleDelete = (row: any) => {
    if (props.delete.custom) {
        emit("delete", row)
    } else {
        deleteOne.sendDelete({ ...row, id: row[fsDataTableContext?.rowKey || "id"] }).then(() => {
            fsDataTableContext?.reload()
        })
    }
}
</script>

<template>
    <ElTableColumn :label="label" :fixed="fixed" :width="width">
        <template #default="{ row }">
            <If :when="edit.show">
                <ElButton size="small" @click="goEdit(row)" plain :type="edit?.buttonType">
                    {{ edit.label }}
                </ElButton>
            </If>
            <If :when="detail.show">
                <ElButton size="small" @click="goDetail(row)" plain :type="edit?.buttonType">
                    {{ detail.label }}
                </ElButton>
            </If>

            <If :when="$props.delete?.show">
                <ElPopover placement="top">
                    <template #reference>
                        <ElButton size="small" plain :type="$props.delete?.buttonType">
                            {{ $props.delete?.label }}
                        </ElButton>
                    </template>

                    <div>
                        {{ $props.delete?.title }}
                    </div>
                    <div class="fast-start-table-delete-button">
                        <ElButton
                            @click="handleDelete(row)"
                            plain
                            type="danger"
                            size="small"
                            :loading="deleteOne.isLoading.value"
                            >{{ $props.delete?.label }}
                        </ElButton>
                    </div>
                </ElPopover>
            </If>

            <slot :row="row" />
        </template>
    </ElTableColumn>
</template>

<style>
.fast-start-table-delete-button {
    margin-top: 10px;
    text-align: end;
}
</style>
