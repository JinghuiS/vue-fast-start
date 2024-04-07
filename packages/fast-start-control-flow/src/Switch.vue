<script setup lang="ts">
import { RendererElement, RendererNode, VNode, computed, useSlots } from "vue"

import If from "./If.vue"
import { MatchProps } from "./type"

defineOptions({
    name: "Switch"
})
const slots = useSlots()
function getChildren() {
    return slots.default ? slots.default() : null
}

function recursiveGetChildren(
    children: VNode<
        RendererNode,
        RendererElement,
        {
            [key: string]: any
        }
    >[],
    results: {
        when?: MatchProps<any>["when"]
        slot?: VNode<any>
    }[]
) {
    if (!results) {
        results = []
    }

    if (!Array.isArray(children)) {
        children = [children]
    }

    for (let i = 0; i < children.length; i++) {
        const c = children[i].props!.when
        if (c) {
            return [i, c, children[i]]
        }
    }
    return [-1]
}

const columns = computed(() => {
    let children = getChildren()

    if (!children) {
        return
    }
    const [index, when, cond] = recursiveGetChildren(children, [])

    return {
        index,
        when,
        slot: cond
    }
})
</script>

<template>
    <If :when="columns?.index !== -1">
        <component :is="columns?.slot" />
        <template #fallback>
            <slot name="fallback" />
        </template>
    </If>
</template>
