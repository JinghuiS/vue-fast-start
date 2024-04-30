<script setup lang="ts" generic="T extends any[]">
import { ElTable, ElPagination, type TableProps, type TableInstance } from "element-plus"
import { useGetList } from "../../api/useGetList"
import { useResourceContext } from "../../context/resource"
import { useFastStartContext } from "../../context/fast-start"
import { computed, ref, shallowRef, type Ref } from "vue"
import { useUrlState } from "../../hooks/useUrlState"

import { readonly } from "vue"
import { createDataProviderProvider, useDataProviderContext } from "../../context/data-provider"
import { createFsDataTableProvider } from "../../context/fs-table"
import { DataProvider } from "../../api/types"

interface FsDataTableProps extends Partial<TableProps<T>> {
    tableData?: T
    immediate?: boolean
    request?: DataProvider["getList"]
}
defineOptions({
    name: "FsDataTable",
    inheritAttrs: false
})

const props = withDefaults(defineProps<FsDataTableProps>(), {
    immediate: true
})
const dataProvider = useDataProviderContext()
if (props.request) {
    createDataProviderProvider({ ...dataProvider, getList: props.request })
}

const multipleSelection = ref<any>([])

const resourceContext = useResourceContext()
const fastStartContext = useFastStartContext()
const tableInstance = shallowRef<TableInstance>()

const [filterValues, setFilterValues] = useUrlState(
    {
        pagination: {
            page: 1,
            perPage: 10
        },
        filter: {}
    },
    {
        nestedKey: "tableState"
    }
)

const listParams = ref({
    pagination: {
        page: Number(filterValues.pagination?.page) || 1,
        perPage: Number(filterValues.pagination?.perPage) || 10
    },
    filter: {}
})

const { data, total, isLoading, execute } = useGetList(
    resourceContext.name,
    listParams.value,
    props.immediate
)

const _rowKey = computed(() => props.rowKey || fastStartContext.rowKey)
const _data = computed(() => props.tableData || data.value)

const handlePageChange = () => {
    execute()
    setFilterValues(listParams.value)
}

const setFilter = (filter: any) => {
    listParams.value.filter = filter
}

const handleSelectionChange = (val: any[]) => {
    multipleSelection.value = val
}

const clearSelection = () => {
    tableInstance.value?.clearSelection()
}

const toggleSelection = (rows: any[]) => {
    rows.forEach((row) => {
        // TODO: improvement typing when refactor table
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tableInstance.value?.toggleRowSelection(row, undefined)
    })
}

const filter = computed(() => listParams.value.filter)

createFsDataTableProvider({
    tableInstance: tableInstance.value as TableInstance,
    setFilter,
    reload: handlePageChange,
    filter: readonly(filter),
    multipleSelection,
    rowKey: _rowKey.value as string,
    clearSelection,
    toggleSelection
})
defineExpose({
    tableInstance: tableInstance.value,
    setFilter,
    reload: handlePageChange,
    filter: readonly(filter),
    multipleSelection,
    clearSelection,
    toggleSelection
})
</script>

<template>
    <div class="fast-start-table">
        <el-table
            @selection-change="handleSelectionChange"
            ref="tableInstance"
            v-loading="isLoading"
            :row-key="_rowKey"
            :data="_data"
            v-bind="$attrs"
            highlight-current-row
            scrollbar-always-on
        >
            <slot :data="data" :loading="isLoading" :total="total" />
        </el-table>
        <el-pagination
            :disabled="isLoading"
            class="fast-start-pagination"
            :total="total"
            @change="handlePageChange"
            v-model:current-page="listParams.pagination.page"
            v-model:page-size="listParams.pagination.perPage"
        />
    </div>
</template>

<style scoped>
.fast-start-table {
    display: flex;
    flex-direction: column;
    .fast-start-pagination {
        margin-top: 20px;
        margin-left: auto;
    }
}
</style>
