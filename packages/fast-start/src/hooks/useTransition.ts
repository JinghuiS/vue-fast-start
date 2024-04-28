import { ref } from "vue"

export const useTransition = () => {
    const isLoading = ref(false)
    const start = <T>(promise: () => Promise<T>) => {
        isLoading.value = true
        return promise().finally(() => (isLoading.value = false))
    }
    return { isLoading, start }
}
