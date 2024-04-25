<script setup lang="ts">
import { createReusableTemplate } from "@vueuse/core"

import { ElSubMenu, ElMenuItem, ElIcon } from "element-plus"
import { For, If } from "@fast-start/control-flow"
import type { FSMenuType } from "../../../../store/menu"
defineOptions({
    name: "FsSideBarItem"
})

defineProps<{
    items: FSMenuType[]
}>()

const [Define, Reuse] = createReusableTemplate<{ list: FSMenuType[] }>()
</script>
<template>
    <Define v-slot="{ list }">
        <For :echo="list" row-key="path" v-slot="{ item }">
            <If :when="item.children && item.children.length">
                <ElSubMenu class="fast-start-menu-item-title" :index="item.path">
                    <template #title>
                        <If :when="item.icon">
                            <ElIcon> <component :is="item.icon" /></ElIcon>
                        </If>
                        {{ item.name }}
                    </template>

                    <Reuse :list="item.children || []" />
                </ElSubMenu>

                <template #fallback>
                    <ElMenuItem class="fast-start-menu-item" :index="item.path">
                        <If :when="item.icon">
                            <ElIcon> <component :is="item.icon" /></ElIcon>

                            <!-- <template #fallback>
                                <div style="width: 24px; height: 18px" />
                            </template> -->
                        </If>
                        {{ item.name }}
                    </ElMenuItem>
                </template>
            </If>
        </For>
    </Define>

    <Reuse :list="items" />
</template>
<style></style>
