<script setup lang="ts">
import { reactive, onMounted, computed } from "vue"

import { data as examples } from "../data/examples.data"

defineOptions({ name: "ex-code" })

type CodeList = {
    name: string
    type: string
}

const props = defineProps<{
    codeList: CodeList[]
    comp: string
    title?: string
    hiddenCode?: boolean
}>()

const state = reactive<{
    codeName: string
    codeTemplate: string
    codeList: CodeList[]
    codeType: string
}>({
    codeName: "",
    codeTemplate: "",
    codeType: "",

    codeList: []
})

onMounted(() => initState())

async function initState() {
    state.codeList = props.codeList

    state.codeName = state.codeList[0].name + "." + state.codeList[0].type
    state.codeType = state.codeList[0].type

    state.codeTemplate = examples.find(
        ({ sfcName }) => state.codeList[0].name === sfcName
    )!.sfcRawData
}

const options = computed(() => {
    return state.codeList.map(({ name, type }) => name + "." + type)
})
function copyCode() {
    // copy(state.codeTemplate)
    // GToast.success("Code copied successfully!")
}

function changeCode(name: string) {
    // state.codeName = name

    state.codeTemplate = examples.find(({ sfcName }) => name.split(".")[0] === sfcName)!.sfcRawData
}
</script>

<template>
    <client-only>
        <div class="vp-raw ex-code">
            <h3 class="g-subheading code-name">{{ title }}</h3>

            <p class="desc" v-if="$slots.default">
                <slot></slot>
            </p>

            <el-card class="ex-code-box" :class="{ 'box-hidden-code': hiddenCode }">
                <component :is="comp" />

                <template #footer>
                    <details class="details" v-if="!hiddenCode">
                        <summary>
                            预览代码
                            <div class="summary-row">
                                <!-- <span class="preview">
                                    <ex-icon-arrow class="down" />
                                    预览代码
                                </span> -->

                                <!-- <ex-icon-copy class="copy" @click.stop.prevent="copyCode" /> -->
                            </div>
                        </summary>

                        <div class="language-vue code-bg vp-adaptive-theme">
                            <el-segmented
                                @change="changeCode"
                                v-model="state.codeName"
                                :options="options"
                            />
                            <ex-shiki
                                class="ex-source-code"
                                :code="state.codeTemplate"
                                :language="state.codeType"
                            />
                        </div>
                    </details>
                </template>
            </el-card>
        </div>
    </client-only>
</template>

<style lang="scss" scoped>
@use "sass:math";

@function rem($pxValue) {
    $remValue: math.div($pxValue, 16) + rem;

    @return $remValue;
}
pre {
    overflow-y: auto;
}

.ex-code {
    margin-top: 4.5rem;
}
.code-name {
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 1;
    margin-bottom: 0;
}

p {
    margin: 1rem 0 !important;
    font-size: 1rem;
    line-height: 1.625rem;
}

.desc {
    margin-top: 0;
    color: var(--accents-5);
    font-size: 0.8rem;
}
.ex-source-code {
    margin-top: 10px;
}
.ex-code-box {
    margin-top: 1.25rem;
    position: relative;
    padding-top: var(--geist-page-margin);
    padding-bottom: var(--geist-page-margin);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.box-hidden-code {
    border-bottom-left-radius: var(--geist-radius);
    border-bottom-right-radius: var(--geist-radius);
}
.details {
    border-bottom-left-radius: var(--geist-radius);
    border-bottom-right-radius: var(--geist-radius);
    width: 100%;

    summary {
        margin: 0;
    }

    .summary-row {
        padding: var(--geist-gap-half) var(--geist-gap);
        border-left: 1px solid var(--accents-2);
        border-bottom: 1px solid var(--accents-2);
        border-right: 1px solid var(--accents-2);
        border-bottom-left-radius: var(--geist-radius);
        border-bottom-right-radius: var(--geist-radius);
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        span {
            display: flex;
            align-items: center;
        }
    }
    pre {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin: 0;
        background-color: var(--geist-background);
        overflow-x: auto;
    }
}
.details[open] {
    .summary-row {
        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .down {
        transform: rotateZ(0deg);
    }
    .copy {
        opacity: 1;
        visibility: visible;
    }
}
.code-bg {
    overflow: hidden;
}
.down {
    width: rem(10);
    height: rem(10);
    margin-right: 5px;
    transform: rotateZ(-90deg);
    transition: all 0.1s ease;
}
.copy {
    transition: all 0.1s ease-in;
    color: var(--accents-5);
    opacity: 0;
    visibility: hidden;
    width: rem(14);
}
.preview {
    font-size: rem(13);
}
</style>
