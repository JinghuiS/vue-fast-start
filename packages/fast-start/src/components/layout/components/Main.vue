<script setup lang="ts">
import { ElMain } from "element-plus"
import { HEADER_HIGHT } from "../consts"
import { RouterView } from "vue-router"
</script>
<template>
    <ElMain
        class="fast-start-layout-main"
        :style="{
            height: `calc(100vh - ${HEADER_HIGHT}px) `
        }"
    >
        <RouterView />
    </ElMain>
</template>

<style>
.fast-start-layout-main {
    background: var(--el-color-info-light-9);
}
</style>
