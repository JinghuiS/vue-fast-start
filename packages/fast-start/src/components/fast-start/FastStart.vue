<script setup lang="ts">
import { ModalProvider } from "vue-modal-provider"

import { initTheme } from "../../theme"
import { type FastStarProps, createFastStartProvider } from "../../context/fast-start"

import BodyOverlayScrollbars from "../BodyOverlayScrollbars.vue"
import { onMounted, watch } from "vue"
import { useMenuStore } from "../../store/menu"
import { createDataProviderProvider } from "../../context"
defineOptions({
    name: "FastStart"
})

const props = withDefaults(defineProps<FastStarProps>(), {
    rowKey: "id",
    useTheme: true,
    title: "Fast Start",
    routerMode: "hash",
    basename: "/"
})
if (props.useTheme) {
    initTheme()
}

const { setMenu } = useMenuStore()

createFastStartProvider(props)
if (props.dataProvider) {
    createDataProviderProvider({ ...props.dataProvider, rowKey: props.rowKey })
}
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
