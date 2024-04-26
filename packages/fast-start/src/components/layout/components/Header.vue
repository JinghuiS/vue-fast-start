<script setup lang="ts">
import { ElHeader } from "element-plus"
import { HEADER_HIGHT } from "../consts"
import { useFastStartContext } from "../../../context/fast-start"

const { title } = useFastStartContext()
</script>

<template>
    <ElHeader class="fast-start-layout-header" :style="{ height: HEADER_HIGHT }">
        <slot>
            <div class="fast-start-layout-header-title">
                {{ title }}
            </div>
        </slot>
    </ElHeader>
</template>

<style>
.fast-start-layout-header {
    border-bottom: 1px solid var(--el-menu-border-color);
    display: flex;
    align-items: center;
}

.fast-start-layout-header-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--el-text-color-primary);
}
</style>
