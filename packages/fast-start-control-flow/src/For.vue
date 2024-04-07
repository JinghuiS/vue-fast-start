<script setup lang="ts" generic="T extends any[]">
import { computed } from "vue"
import If from "./If.vue"

defineOptions({
    name: "For"
})

const props = defineProps<{
    echo: T
    rowKey: keyof T[number]
}>()

function itemType(item: T[number]) {
    return item as T[number]
}

const echoType = computed<any[]>(() => {
    return props.echo
})
</script>

<template>
    <template v-for="item in echo" :key="rowKey">
        <slot v-bind="itemType(item)" />
    </template>
    <If :when="!echoType || !echoType.length || echoType.length === 0">
        <slot name="fallback" />
    </If>
</template>
