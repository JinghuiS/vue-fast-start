<script setup lang="ts">
import { ModalProvider } from "vue-modal-provider"

import { initTheme } from "../../theme"
import { type FastStarsProps, createFastStartProvider } from "../../context/fast-start"

import BodyOverlayScrollbars from "../BodyOverlayScrollbars.vue"
import { onMounted, watch } from "vue"
import { useMenuStore } from "../../store/menu"
defineOptions({
    name: "FastStars"
})

const props = withDefaults(defineProps<FastStarsProps>(), {
    rowKey: "id",
    useTheme: true,
    title: "Fast Start",
    routerMode: "hash"
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
        if (props.menu) {
            setMenu(props.menu)
        }
    }
)
</script>

<template>
    <ModalProvider>
        <BodyOverlayScrollbars>
            <slot></slot>
        </BodyOverlayScrollbars>
    </ModalProvider>
</template>
