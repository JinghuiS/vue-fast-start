import { noop, until } from "@vueuse/shared"
import { shallowRef, ref, type Ref, watch } from "vue"
export interface UseHttpOptions<T = any, QueryKey = unknown> {
    queryFn: (params?: any) => Promise<T>
    queryKey?: QueryKey[]
    /**
     * Will automatically run  request when `useHttp` is used
     *
     */
    immediate?: boolean

    /**
     * Use shallowRef.
     *
     * @default true
     */
    shallow?: boolean
    /**
     * Callback when error is caught.
     */
    onError?: (e: unknown) => void

    /**
     * Callback when success is caught.
     */
    onSuccess?: (data: T) => void

    /**
     * Initial data to use
     */
    initialData?: T
    /**
     * Sets the state to initialState before executing the promise.
     */
    resetOnExecute?: boolean

    /**
     * Callback when request is finished.
     */
    onFinish?: () => void
}

export function useHttp<T>(options: UseHttpOptions<T>) {
    const {
        initialData,
        shallow,
        onSuccess = noop,
        onError = noop,
        immediate,
        resetOnExecute = false,
        queryFn,
        queryKey
    } = options

    const data = (shallow ? shallowRef : ref)<T>(initialData!) as Ref<T>
    const isFinished = ref(false)
    const isLoading = ref(false)
    const isAborted = ref(false)
    const error = shallowRef<unknown>()

    const loading = (loading: boolean) => {
        isLoading.value = loading
        isFinished.value = !loading
    }

    /**
     * Reset data to initialData
     */
    const resetData = () => {
        if (resetOnExecute) data.value = initialData!
    }
    const waitUntilFinished = () =>
        new Promise<any>((resolve, reject) => {
            until(isFinished)
                .toBe(true)
                // eslint-disable-next-line ts/no-use-before-define
                .then(() => (error.value ? reject(error.value) : resolve(result)))
        })

    const promise = {
        then: (...args) => waitUntilFinished().then(...args),
        catch: (...args) => waitUntilFinished().catch(...args)
    } as Promise<any>

    let executeCounter = 0

    const execute = <T = any>(params?: T) => {
        error.value = undefined
        if (isLoading.value) {
            return promise
        }
        if (queryFn === undefined) {
            isFinished.value = true
            return promise
        }

        resetData()
        loading(true)

        executeCounter += 1
        const currentExecuteCounter = executeCounter

        queryFn(params)
            .then((r: any) => {
                const result = r
                data.value = result
                onSuccess(result)
            })
            .catch((e: any) => {
                error.value = e
                onError(e)
            })
            .finally(() => {
                options.onFinish?.()
                if (currentExecuteCounter === executeCounter) loading(false)
            })
        return promise
    }
    if (immediate) execute()

    // if (queryKey) {
    //     watch(
    //         queryKey,
    //         () => {
    //             if (!isLoading) {
    //                 execute()
    //             }
    //         },
    //         { deep: true }
    //     )
    // }

    const result = {
        data,
        error,
        isFinished,
        isLoading,
        isAborted,
        isCanceled: isAborted,
        execute
    }
    return {
        ...result,
        ...promise
    }
}
