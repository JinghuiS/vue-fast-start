<script setup lang="ts">
import { computed } from "vue"
import { FsFilterDataItem, fsFilterItemProps, fsFilterProps } from "./FsFilter"

import clsx from "clsx"
import { addUnit } from "@fast-start/utils"
import { CSSProperties } from "vue"
const CASCADE_FILTER_PREFIX = "fast-start-filter-item"
const NOOP_ID = ""
const emits = defineEmits({
    change: (value: string, targetItem: FsFilterDataItem) => true
})
const props = defineProps(fsFilterItemProps)
const modelValue = defineModel<string>({ default: NOOP_ID })

const allowSelect = (item: FsFilterDataItem) => !item.disabled
const idFieldName = "id"

const onChange = (value: string, targetItem: FsFilterDataItem) => {
    emits("change", value, targetItem)
}
const onItemSelect = <T extends FsFilterDataItem>(targetItem: T, shouldSelected = true) => {
    if (allowSelect && allowSelect(targetItem) === false) return

    if (shouldSelected) {
        onChange(targetItem[idFieldName], targetItem)
    } else {
        onChange(NOOP_ID, targetItem)
    }
}
const isSelectedId = (id: string) => modelValue.value !== NOOP_ID && modelValue.value === id

const classObj = {
    label: `${CASCADE_FILTER_PREFIX}__label`,
    labelTitle: `${CASCADE_FILTER_PREFIX}__label-title`,
    values: `${CASCADE_FILTER_PREFIX}__values`,
    value: `${CASCADE_FILTER_PREFIX}__value`,
    valueActive: `${CASCADE_FILTER_PREFIX}__value--active`,
    valueActiveUnderline: `${CASCADE_FILTER_PREFIX}__value--active-underline`,
    valueDisabled: `${CASCADE_FILTER_PREFIX}__value--disabled`,
    valueText: `${CASCADE_FILTER_PREFIX}__value__text`
}

const checkedCss = computed(() => (id: string, disabled?: boolean) => {
    const checked = isSelectedId(id)

    return clsx(
        classObj.value,
        checked && classObj.valueActive,

        checked &&
            props.showUnderline &&
            props.appearance === "link" &&
            classObj.valueActiveUnderline,

        disabled && classObj.valueDisabled
    )
})

const baseCss = computed(() =>
    clsx(CASCADE_FILTER_PREFIX, `${CASCADE_FILTER_PREFIX}--appearance-${props.appearance}`)
)

const style = computed(() => {
    const style: CSSProperties = {
        overflow: "hidden"
    }
    if (props.labelWidth) {
        style.width = addUnit(props.labelWidth)
    }
    return style
})
</script>

<template>
    <div :class="baseCss" role="radiogroup">
        <If :when="label">
            <div :class="classObj.label" :style="style">
                <span :class="classObj.labelTitle">{{ label }}</span>
            </div>
        </If>
        <ul :class="classObj.values">
            <For :echo="data" row-key="id" v-slot="{ item }">
                <li :class="checkedCss(item.id, item.disabled)" @click="onItemSelect(item)">
                    <div :class="classObj.valueText">
                        {{ item.title }}
                    </div>
                </li>
            </For>
        </ul>
    </div>
</template>
<style lang="scss">
@import "./index.scss";
</style>
