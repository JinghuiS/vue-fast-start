<script setup lang="ts" generic="T">
defineOptions({
    name: "If"
})
defineProps<{
    when: T | undefined | null | false
}>()

const valueType = (item: any) => {
    return item as NonNullable<T>
}
</script>

<template>
    <slot v-if="when" :value="valueType(when)" />
    <slot v-else name="fallback" />
</template>
