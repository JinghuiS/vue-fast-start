<script setup lang="ts">
import { computed, ref } from "vue"
import { useResourceContext } from "../../context/resource"
import { useFastStartContext } from "../../context/fast-start"
import { DataProvider } from "../../api/types"
import { createDataProviderProvider, useDataProviderContext } from "../../context/data-provider"
import { useUrlState } from "../../hooks"
import { useGetList } from "../../api"

const props = withDefaults(
    defineProps<{
        pagination?: Partial<{
            page: number
            perPage: number
            show: boolean
            layout: string
        }>
        immediate?: boolean
        request?: DataProvider["getList"]
    }>(),
    {
        immediate: true,
        pagination: () => ({ page: 1, perPage: 10, show: true, layout: "total, prev, pager, next" })
    }
)

const dataProvider = useDataProviderContext()
if (props.request) {
    createDataProviderProvider({ ...dataProvider, getList: props.request })
}

const resourceContext = useResourceContext()
const fastStartContext = useFastStartContext()

const [filterValues, setFilterValues] = useUrlState(
    {
        pagination: {
            page: props.pagination.page,
            perPage: props.pagination.perPage
        },
        filter: {}
    },
    {
        nestedKey: "tableState"
    }
)

const _pagination = ref({
    page: Number(filterValues.pagination?.page) || props.pagination.page || 1,
    perPage: Number(filterValues.pagination?.perPage) || props.pagination.perPage || 10
})
const filter = ref(filterValues.filter || {})

const listParams = computed(() => {
    return {
        pagination: {
            page: _pagination.value.page,
            perPage: _pagination.value.perPage
        },
        filter: filter.value
    }
})

const { data, total, isLoading, execute } = useGetList(
    resourceContext.name,
    listParams.value,
    props.immediate
)

const _data = computed(() => data.value)

const handlePageChange = () => {
    execute()
    setFilterValues(listParams.value)
}

const setFilter = (_filter: any) => {
    filter.value = _filter
    setFilterValues(listParams.value)
}

defineExpose({
    data: _data,
    loading: isLoading,
    pagination: _pagination,
    filter,
    setFilter,
    reload: handlePageChange
})
</script>

<template>
    <slot
        :data="_data"
        :loading="isLoading"
        :total="total"
        :reload="handlePageChange"
        :default-filter="filter"
        :set-filter="setFilter"
        :pagination="pagination"
    />

    <If :when="pagination?.show">
        <div class="fast-start-pagination">
            <el-pagination
                :disabled="isLoading"
                :total="total"
                @change="handlePageChange"
                v-model:current-page="_pagination.page"
                v-model:page-size="_pagination.perPage"
                :layout="pagination?.layout"
            />
        </div>
    </If>
</template>

<style>
.fast-start-pagination {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
