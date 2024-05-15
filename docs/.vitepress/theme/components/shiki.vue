<script setup lang="ts">
import { codeToHtml } from "shiki"

import { computed, onMounted, ref, watch } from "vue"

defineOptions({ name: "ex-shiki" })

const props = defineProps({
    code: {
        type: String,
        required: true
    },

    inline: Boolean,

    language: {
        type: String,
        default: "vue"
    }
})

const innerHTML = ref("")

onMounted(async () => {
    const html = await codeToHtml(props.code, {
        lang: props.language,
        themes: {
            light: "github-light",
            dark: "github-dark"
        },
        defaultColor: "light",
        cssVariablePrefix: "--shiki-",
        transformers: [
            {
                pre: (node) => {
                    node.properties["style"] = ""
                    node.properties["class"] = node.properties["class"] + " vp-code"
                    return node
                }
            }
        ]
    })

    innerHTML.value = html
})

watch(
    () => props.code,
    async (newCode) => {
        const html = await codeToHtml(newCode, {
            lang: props.language,
            themes: {
                light: "github-light",
                dark: "github-dark"
            },
            defaultColor: "light",
            cssVariablePrefix: "--shiki-",
            transformers: [
                {
                    pre: (node) => {
                        node.properties["style"] = ""
                        node.properties["class"] = node.properties["class"] + " vp-code"
                        return node
                    }
                }
            ]
        })

        innerHTML.value = html
    }
)

const className = computed(() => `language-${props.language} `)

// const innerHTML = computed(
//     () => `<code>${Prism.highlight(props.code, prismGrammar, props.language)}</code>`
// )
</script>

<template>
    <code v-if="inline" :class="className" v-bind="$attrs" v-html="innerHTML" />

    <pre v-else v-bind="$attrs" v-html="innerHTML" />
</template>
