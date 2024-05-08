<script setup lang="ts">
import { computed, ref } from "vue"
import { useResourceContext } from "../../context/resource"
import { useFastStartContext } from "../../context/fast-start"
import { DataProvider } from "../../api/types"
import { createDataProviderProvider, useDataProviderContext } from "../../context/data-provider"
import { useUrlState } from "../../hooks"
import { useGetList } from "../../api"
import { createFsDataProvider } from "../../context/fs-data"

interface PaginationType {
    page?: number
    perPage?: number
    show?: boolean
    layout?: string
}

interface FsDataProps {
    pagination?: PaginationType
    immediate?: boolean
    request?: DataProvider["getList"]
    rowKey?: string
    defaultFilter?: Record<string, any>
}

const props = withDefaults(defineProps<FsDataProps>(), {
    immediate: true,
    pagination: () => ({ page: 1, perPage: 10, show: true, layout: "total, prev, pager, next" })
})

const dataProvider = useDataProviderContext()
if (props.request) {
    createDataProviderProvider({ ...dataProvider, getList: props.request })
}

const resourceContext = useResourceContext()
const fastStartContext = useFastStartContext()

const defaultPagination = {
    page: props.pagination.page || 1,
    perPage: props.pagination.perPage || 10
}
const defaultFilter = props.defaultFilter || {}

const [filterValues, setFilterValues] = useUrlState(
    {
        pagination: {
            page: props.pagination.page,
            perPage: props.pagination.perPage
        },
        filter: {}
    },
    {
        nestedKey: resourceContext.name
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

const _rowKey = computed(() => props.rowKey || fastStartContext.rowKey)
const _data = computed(() => data.value)

const reload = (page?: number) => {
    if (page) {
        _pagination.value.page = page
    }

    setFilterValues(listParams.value)

    execute(listParams.value)
}

const setFilter = (_filter: any) => {
    filter.value = _filter
    setFilterValues(listParams.value)
}

const setPagination = (pagination: Partial<Omit<PaginationType, "show" | "layout">>) => {
    _pagination.value = {
        ...defaultPagination,
        ..._pagination.value,
        ...pagination
    }
    setFilterValues(listParams.value)
}

const reset = () => {
    filter.value = defaultFilter
    _pagination.value = { ...defaultPagination }
    setFilterValues(listParams.value)
}

createFsDataProvider({
    loading: isLoading,
    data: _data,
    filter: filter,
    rowKey: _rowKey.value,
    setFilter,
    reload: reload,
    reset,
    setPagination
})

defineExpose({
    data: _data,
    loading: isLoading,
    pagination: _pagination,
    filter,
    setFilter,
    reload: reload,
    rowKey: _rowKey,
    reset,
    setPagination
})
</script>

<template>
    <slot
        :data="_data"
        :loading="isLoading"
        :total="total"
        :reload="reload"
        :default-filter="defaultFilter"
        :filter="filter"
        :set-filter="setFilter"
        :pagination="pagination"
        :row-key="_rowKey"
        :set-pagination="setPagination"
        :reset="reset"
    />

    <If :when="pagination?.show">
        <div class="fast-start-pagination">
            <el-pagination
                :disabled="isLoading"
                :total="total"
                @change="reload"
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
