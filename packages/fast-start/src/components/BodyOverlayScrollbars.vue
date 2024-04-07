<script setup lang="ts">
import { useOverlayScrollbars } from "overlayscrollbars-vue"

import { onMounted, ref } from "vue"
defineOptions({
    name: "BodyOverlayScrollbars"
})

const bodyOverlayScrollbarsApplied = ref<boolean | null>(null)

// const [activeEvents, activateEvent] = useEventObserver();
const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    events: {
        initialized: () => {
            bodyOverlayScrollbarsApplied.value = true
        },
        destroyed: () => {
            bodyOverlayScrollbarsApplied.value = false
        }
    },
    options: {
        scrollbars: {
            autoHide: "scroll"
            // theme: "os-theme-light"
        }
    }
})

onMounted(() => initBodyOverlayScrollbars(document.body))
</script>
<template>
    <slot />
</template>

<style>
@import "overlayscrollbars/overlayscrollbars.css";
</style>
