<script setup lang="ts">
import { RouterView } from "vue-router"
import { createResourceProvider } from "../../context/resource"

defineOptions({
    name: "FsResource"
})

const props = defineProps<{
    name: string
}>()

createResourceProvider({ name: props.name })
</script>
<template>
    <RouterView />
</template>
