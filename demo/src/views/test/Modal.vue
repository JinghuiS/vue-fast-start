<script setup lang="ts">
// import { ElDialog } from "element-plus"

import { FsPopupFooter } from "@fast-start/core"
import { ref } from "vue"

defineProps<{ text: string }>()

const loading = ref(false)
const close = (done: (msg?: any) => void) => {
    loading.value = true
    setTimeout(() => {
        done("111")
        loading.value = false
    }, 300)
}
</script>

<template>
    <fs-dialog title="Tips" remove-on-closed>
        {{ text }}
        <template #footer>
            <fs-popup-footer :confirm-loading="loading" @confirm="close" />
        </template>
    </fs-dialog>
</template>
