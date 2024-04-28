<script setup lang="ts">
import { useRouter } from "vue-router"
import { If } from "@fast-start/control-flow"
import Loading from "../Loading.vue"
import type { AuthProvider } from "../../api/types"
import { onMounted, ref } from "vue"
const props = withDefaults(
    defineProps<{
        errorPath?: string
        authProvider: AuthProvider
    }>(),
    {
        errorPath: "/error"
    }
)
const loading = ref(false)
const router = useRouter()
onMounted(() => {
    loading.value = true
    props.authProvider.checkAuth().then(
        () => {
            loading.value = false
        },
        () => {
            loading.value = false
            router.replace(props.errorPath)
        }
    )
})
</script>
<template>
    <If :when="loading">
        <slot />
        <template #fallback>
            <slot name="loading">
                <Loading />
            </slot>
        </template>
    </If>
</template>
