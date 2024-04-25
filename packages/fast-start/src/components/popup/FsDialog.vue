<script setup lang="ts">
import { ElDialog, DialogProps, DialogEmits } from "element-plus"
import { useModalRef } from "vue-modal-provider"

defineOptions({
    name: "FsDialog"
    // inheritAttrs: false
})

interface FsDialogProps extends Partial<DialogProps> {
    removeOnClosed?: boolean
}

const props = withDefaults(defineProps<FsDialogProps>(), {
    modal: true,
    lockScroll: true,
    openDelay: 0,
    closeDelay: 0,
    closeOnPressEscape: true,
    closeOnClickModal: true,
    removeOnClosed: true,
    showClose: true
    // appendTo: "body"
})
const emit = defineEmits<{
    open: [visible: any]
    opened: [visible: any]
    close: [visible: any]
    closed: [visible: any]
    openAutoFocus: [visible: any]
    closeAutoFocus: [visible: any]
}>()

const closed = () => {
    emit("closed", modal.visible.value)
    if (props.removeOnClosed) {
        modal.remove()
    }
}

const modal = useModalRef()
</script>
<template>
    <ElDialog
        v-bind="props"
        v-model="modal.visible.value"
        @open="emit('open', $event)"
        @opened="emit('opened', $event)"
        @close-auto-focus="emit('closeAutoFocus', $event)"
        @close="emit('close', $event)"
        @closed="closed"
    >
        <template #header>
            <slot name="header" />
        </template>

        <template #footer>
            <slot name="footer" />
        </template>
        <slot />
    </ElDialog>
</template>
