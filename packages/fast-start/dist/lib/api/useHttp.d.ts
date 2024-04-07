import { type Ref } from "vue";
export interface UseHttpOptions<T = any, QueryKey = unknown> {
    queryFn: () => Promise<T>;
    queryKey?: QueryKey[];
    /**
     * Will automatically run  request when `useHttp` is used
     *
     */
    immediate?: boolean;
    /**
     * Use shallowRef.
     *
     * @default true
     */
    shallow?: boolean;
    /**
     * Callback when error is caught.
     */
    onError?: (e: unknown) => void;
    /**
     * Callback when success is caught.
     */
    onSuccess?: (data: T) => void;
    /**
     * Initial data to use
     */
    initialData?: T;
    /**
     * Sets the state to initialState before executing the promise.
     */
    resetOnExecute?: boolean;
    /**
     * Callback when request is finished.
     */
    onFinish?: () => void;
}
export declare function useHttp<T>(options: UseHttpOptions<T>): {
    then<TResult1 = any, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<any>;
    finally(onfinally?: () => void): Promise<any>;
    [Symbol.toStringTag]: string;
    data: Ref<T>;
    error: import("vue").ShallowRef<unknown>;
    isFinished: Ref<boolean>;
    isLoading: Ref<boolean>;
    isAborted: Ref<boolean>;
    isCanceled: Ref<boolean>;
    execute: () => Promise<any>;
};
