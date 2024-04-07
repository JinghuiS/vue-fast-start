<script setup lang="ts">
import BaseLayout from "../layout/DefaultLayout.vue"
import { initTheme } from "../../theme"
import { type FastStarsProps, createFastStartProvider } from "../../content/fast-start"

import BodyOverlayScrollbars from "../BodyOverlayScrollbars.vue"
import { onMounted, watch } from "vue"
import { useMenuStore } from "../../store/menu"
defineOptions({
    name: "FastStars"
})

const props = withDefaults(defineProps<FastStarsProps>(), {
    rowKey: "id",
    useTheme: true
})
if (props.useTheme) {
    initTheme()
}

const { setMenu } = useMenuStore()

createFastStartProvider(props)

onMounted(() => {
    if (props.menu) {
        setMenu(props.menu)
    }
})

watch(
    () => props.menu,
    () => {
        setMenu(props.menu)
    }
)
</script>

<template>
    <BodyOverlayScrollbars>
        <slot name="layout"> <BaseLayout /> </slot>
    </BodyOverlayScrollbars>
</template>
