<script setup lang="ts">
import { useModal } from "@fast-start/core"
import dialogComp from "./dialog.vue"

defineOptions({ name: "ex-popup-show-dialog" })

const dialog = useModal(dialogComp)

const show = () => {
    dialog.show({ text: "测试 msg" }).then()
}
</script>
<template>
    <el-button @click="show">打开弹窗</el-button>
</template>
