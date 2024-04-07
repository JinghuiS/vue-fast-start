<script setup lang="ts">
import { ElHeader } from "element-plus"
import { HEADER_HIGHT } from "../consts"
</script>

<template>
    <ElHeader class="fast-start-layout-header" :style="{ height: HEADER_HIGHT }"> header </ElHeader>
</template>

<style>
.fast-start-layout-header {
    border-bottom: 1px solid var(--el-menu-border-color);
}
</style>
