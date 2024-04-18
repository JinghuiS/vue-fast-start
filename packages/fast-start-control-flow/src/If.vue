<script setup lang="ts" generic="T extends any = any ">
defineOptions({
    name: "If"
})
defineProps<{
    when: T | any
}>()

const valueType = (item: any) => {
    return item as NonNullable<T>
}
</script>

<template>
    <slot v-if="when" :value="valueType(when)" />
    <slot v-else name="fallback" />
</template>
