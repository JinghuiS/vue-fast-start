import { Ref, computed, onMounted } from "vue"

import type { FsFilterDataItem, UseFilterProps } from "./FsFilter"
import { isArray } from "lodash-unified"
import { set } from "@vueuse/shared"

export const useFsFilter = (
    { label: labels, data: dataProp, defaultValue, ...rest }: UseFilterProps,
    modelValue: Ref<string[]>,
    onChange: (value: string[], targetItem: FsFilterDataItem) => void
) => {
    onMounted(() => {
        if (defaultValue) {
            modelValue.value = defaultValue
        }
    })

    const menusData = computed(() => {
        let lastMenu = dataProp
        const menus = [lastMenu]
        const menuPathLength = modelValue.value.length

        // 遍历 value 依次匹配 当前层的 item，并将 children 加入到面板数据中
        for (let depth = 0; depth < menuPathLength; ++depth) {
            const id = modelValue.value[depth]
            const foundItem = lastMenu.find((item) => item.id === id)

            if (foundItem && isArray(foundItem.children)) {
                lastMenu = foundItem.children
                menus.push(lastMenu)
            } else {
                break
            }
        }
        return menus
    })

    const menusWithLabel = computed(() => {
        return labels.map((label, depth) => {
            return {
                label,
                value: modelValue.value[depth] ?? "",
                data: menusData.value[depth] ?? [],
                depth
            }
        })
    })

    const isSelectId = (id: string, level: number) => {
        const curId = modelValue.value[level]

        if (curId == null || curId === "") return false

        return modelValue.value[level] === id
    }

    const onItemSelect = (item: FsFilterDataItem, level: number) => {
        const nextValue = modelValue.value.slice(0, level)
        nextValue[level] = item.id

        modelValue.value = nextValue
        // set(modelValue.value, level, item.id)
        onChange(nextValue, item)
        //   tryChangeValue(nextValue, item)
    }

    return {
        menus: menusWithLabel,
        rootProps: rest,
        selectedIds: modelValue,
        isSelectId,
        onItemSelect
    }
}
