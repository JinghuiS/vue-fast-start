<script setup lang="ts" generic="T extends any[]">
import { computed } from "vue"
import If from "./If.vue"

defineOptions({
    name: "For",
    inheritAttrs: false
})

const props = defineProps<{
    echo: T
    rowKey: keyof T[number]
}>()

const echoType = computed<any[]>(() => {
    return props.echo
})
</script>

<template>
    <template v-for="(item, index) in echo as T" :key="rowKey">
        <slot :item="item" :index="index" />
    </template>
    <If :when="!echoType || !echoType.length || echoType.length === 0">
        <slot name="fallback" />
    </If>
</template>
