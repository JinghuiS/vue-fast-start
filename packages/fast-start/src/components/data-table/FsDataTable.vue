<script setup lang="ts" generic="T extends any[]">
import { ElTable, ElPagination, type TableProps, type TableInstance } from "element-plus"
import { useGetList } from "../../api/useGetList"
import { useResourceContext } from "../../context/resource"
import { useFastStartContext } from "../../context/fast-start"
import { computed, ref, shallowRef, type Ref } from "vue"
import { useUrlState } from "../../hooks/useUrlState"

interface FsDataTableProps extends Partial<TableProps<T>> {
    tableData?: T
    immediate?: boolean
}
defineOptions({
    name: "FsDataTable",
    inheritAttrs: false
})

const props = withDefaults(defineProps<FsDataTableProps>(), {
    immediate: true
})
const resourceContext = useResourceContext()
const fastStartContext = useFastStartContext()
const tableInstance = shallowRef<any>(null)

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
    //@ts-ignore
    setFilterValues(listParams.value)
}

const setFilter = (filter: any) => {
    listParams.value.filter = filter
}

defineExpose({
    tableInstance: tableInstance as Ref<TableInstance>,
    setFilter,
    handlePageChange,
    filter: listParams.value.filter
})
</script>

<template>
    <div class="fast-start-table">
        <el-table
            ref="tableInstance"
            v-loading="isLoading"
            :row-key="_rowKey"
            :data="_data"
            v-bind="$attrs"
            highlight-current-row
            scrollbar-always-on
        >
            <slot />
        </el-table>
        <el-pagination
            :disabled="isLoading"
            class="fast-start-pagination"
            :page-sizes="[10, 20, 30, 100]"
            layout="prev, pager, next,sizes"
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
