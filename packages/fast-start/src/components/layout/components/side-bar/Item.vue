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
    <For :echo="items" row-key="path" v-slot="{ path, children, name }">
        <If :when="children && children.length > 0">
            <ElSubMenu class="fast-start-menu-item-title" :index="path">
                <template #title>
                    {{ name }}
                </template>

                <FsSideBarItem :items="children" />
            </ElSubMenu>

            <template #fallback>
                <ElMenuItem class="fast-start-menu-item" :index="path">
                    {{ name }}
                </ElMenuItem>
            </template>
        </If>
    </For>
</template>
<style></style>
