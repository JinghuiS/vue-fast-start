<script setup lang="ts" generic="T extends any =any ">
defineOptions({
    name: "Match"
})
defineProps<{
    when: T | any
}>()

const valueType = (item: any) => {
    return item as NonNullable<T>
}
</script>
<template>
    <slot :value="valueType(when)" />
</template>
