<script setup lang="ts">
import { FsFilterDataItem, fsFilterEmits, fsFilterProps } from "./FsFilter"
import { useFsFilter } from "./useFsFilter"
import FsFilterItem from "./FsFilterItem.vue"

defineOptions({
    name: "FsFilter"
})
const props = defineProps(fsFilterProps)
const modelValue = defineModel<string[]>({ default: () => [] })
const emits = defineEmits(fsFilterEmits)

const onChange = (value: string[], targetItem: FsFilterDataItem) => {
    emits("change", value, targetItem)
}

const { rootProps, menus, onItemSelect } = useFsFilter(props, modelValue, onChange)

const CASCADE_FILTER_PREFIX = "fast-start-filter"
</script>

<template>
    <div class="fast-start-filter" v-bind="rootProps">
        <For :echo="menus" row-key="depth" v-slot="{ item }">
            <FsFilterItem
                :label="item.label"
                :data="item.data"
                :model-value="item.value"
                @change="(_, targetItem) => onItemSelect(targetItem, item.depth)"
                :label-width="labelWidth"
                :appearance="appearance"
                :show-underline="showUnderline"
            />
        </For>
    </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>
