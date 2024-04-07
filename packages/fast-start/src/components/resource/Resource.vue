<script setup lang="ts">
import { RouterView } from "vue-router"
import { createResourceProvider } from "../../content/resource"

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
