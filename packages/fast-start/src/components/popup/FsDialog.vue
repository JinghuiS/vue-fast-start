<script setup lang="ts">
import { ElDialog, DialogProps, DialogEmits } from "element-plus"
import { useModalRef } from "vue-modal-provider"
import { fsDialogEmits, fsDialogProps } from "./FsDialog"

defineOptions({
    name: "FsDialog"
    // inheritAttrs: false
})

const props = defineProps(fsDialogProps)
//     , {
//     modal: true,
//     lockScroll: true,
//     openDelay: 0,
//     closeDelay: 0,
//     closeOnPressEscape: true,
//     closeOnClickModal: true,
//     removeOnClosed: true,
//     showClose: true
//     // appendTo: "body"
// }
const emit = defineEmits(fsDialogEmits)

const closed = () => {
    if (props.removeOnClosed) {
        modal.remove()
    }
    emit("closed")
}

const modal = useModalRef()
</script>
<template>
    <ElDialog
        v-bind="props"
        v-model="modal.visible.value"
        @open="emit('open')"
        @opened="emit('opened')"
        @close-auto-focus="emit('closeAutoFocus')"
        @close="emit('close')"
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
