<script setup lang="ts">
import { ElButton } from "element-plus"
import { useModalRef } from "vue-modal-provider"
defineOptions({
    name: "FsPopupFooter"
})

const props = withDefaults(
    defineProps<{
        confirmLoading: boolean
        confirmText?: string
        cancelText?: string
        confirmType?: "primary" | "success" | "warning" | "danger" | "info" | "default"
        cancelType?: "primary" | "success" | "warning" | "danger" | "info" | "default"
        confirmDisabled?: boolean
        cancelDisabled?: boolean
    }>(),
    {
        confirmText: "确认",
        cancelText: "取消",
        confirmType: "primary",
        cancelType: "default",
        confirmDisabled: false,
        cancelDisabled: false
    }
)

const modal = useModalRef()

const done = (msg?: any) => {
    modal.hide()
    modal.resolve(msg)
}

const emit = defineEmits<{
    confirm: [done: (msg?: any) => void]
    cancel: [done: (msg?: any) => void]
}>()

const confirm = () => {
    emit("confirm", done)
}

const cancel = () => {
    emit("cancel", done)
}
</script>
<template>
    <div class="dialog-footer">
        <el-button
            :type="cancelType"
            :disabled="cancelDisabled"
            :loading="confirmLoading"
            @click="cancel"
        >
            {{ cancelText }}
        </el-button>
        <el-button
            :type="confirmType"
            :disabled="confirmDisabled"
            :loading="confirmLoading"
            @click="confirm"
        >
            {{ confirmText }}
        </el-button>
    </div>
</template>
