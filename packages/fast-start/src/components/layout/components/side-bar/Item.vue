<script setup lang="ts">
import { ElSubMenu, ElMenuItem } from "element-plus"
import { For, If } from "@fast-start/control-flow"
import type { FSMenuType } from "../../../../store/menu"
defineOptions({
    name: "FsSideBarItem"
})

defineProps<{
    items: FSMenuType[]
}>()
</script>
<template>
    <For :echo="items" row-key="path" v-slot="{ item }">
        <If :when="item.children && item.children.length > 0">
            <ElSubMenu class="fast-start-menu-item-title" :index="item.path">
                <template #title>
                    {{ item.name }}
                </template>

                <FsSideBarItem :items="item.children" />
            </ElSubMenu>

            <template #fallback>
                <ElMenuItem class="fast-start-menu-item" :index="item.path">
                    {{ item.name }}
                </ElMenuItem>
            </template>
        </If>
    </For>
</template>
<style></style>
