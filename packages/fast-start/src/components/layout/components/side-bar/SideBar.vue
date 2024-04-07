<script setup lang="ts">
import { ElAside, ElMenu } from "element-plus"
import Item from "./Item.vue"
import { HEADER_HIGHT } from "../../consts"
import { useMenuStore, type FSMenuType } from "../../../../store/menu"

const { state } = useMenuStore()
</script>
<template>
    <ElAside
        class="fast-start-aside"
        width="230px"
        :style="{ height: `calc(100vh - ${HEADER_HIGHT}px)` }"
    >
        <ElMenu class="fast-start-menu">
            <Item :items="state.menu as FSMenuType[]" />
        </ElMenu>
    </ElAside>
</template>

<style>
.fast-start-aside {
    border-right: 1px solid var(--el-menu-border-color);
}

.fast-start-menu {
    border-right: none;
    --fast-start-menu-height: 40px;
    --el-menu-item-height: var(--fast-start-menu-height);
    --el-menu-sub-item-height: var(--fast-start-menu-height);
}

.fast-start-menu .el-sub-menu.is-active > .el-sub-menu__title {
    color: var(--el-color-primary);
}

.fast-start-menu .el-menu-item.is-active {
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
}
.fast-start-menu .el-sub-menu__title {
    border-radius: var(--el-border-radius-base);
    margin: 4px 8px;
}
.fast-start-menu .el-sub-menu__title:hover {
    background-color: var(--el-color-info-light-9);
}
.fast-start-menu-item {
    border-radius: var(--el-border-radius-base);
    margin: 4px 8px;
}
.fast-start-menu-item:hover {
    background-color: var(--el-color-info-light-9);
}
</style>
