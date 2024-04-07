<script setup lang="ts" generic="T extends any[]">
import { ElTable, ElPagination, type TableProps, type TableInstance } from "element-plus"
import { useGetList } from "../../api/useGetList"
import { useResourceContext } from "../../content/resource"
import { useFastStartContext } from "../../content/fast-start"
import { computed, ref, shallowRef, type Ref } from "vue"

interface FsDataTableProps extends Partial<TableProps<T>> {
    tableData?: T
}
defineOptions({
    name: "FsDataTable",
    inheritAttrs: false
})

const resourceContext = useResourceContext()
const fastStartContext = useFastStartContext()
const tableInstance = shallowRef<any>(null)
const listParams = ref({
    pagination: {
        page: 1,
        perPage: 10
    },
    filter: {}
})

const { data, total, isLoading, execute } = useGetList(resourceContext.name, listParams.value)

const props = defineProps<FsDataTableProps>()

const _rowKey = computed(() => props.rowKey || fastStartContext.rowKey)
const _data = computed(() => props.tableData || data.value)

const handlePageChange = () => {
    execute()
}

defineExpose({
    tableInstance: tableInstance as Ref<TableInstance>
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
