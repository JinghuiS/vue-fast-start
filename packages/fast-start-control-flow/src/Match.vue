<script setup lang="ts" generic="T">
defineOptions({
    name: "Match"
})
defineProps<{
    when: T | undefined | null | false
}>()

const valueType = (item: any) => {
    return item as NonNullable<T>
}
</script>
<template>
    <slot :value="valueType(when)" />
</template>
