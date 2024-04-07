import type { BasicRecord, GetListParams } from "./types";
export declare const useGetList: <RecordType extends BasicRecord = any>(resource: string, params?: Partial<GetListParams>) => {
    data: import("vue").ComputedRef<RecordType[]>;
    total: import("vue").ComputedRef<number>;
    then<TResult1 = any, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<any>;
    finally(onfinally?: () => void): Promise<any>;
    [Symbol.toStringTag]: string;
    error: import("vue").ShallowRef<unknown>;
    isFinished: import("vue").Ref<boolean>;
    isLoading: import("vue").Ref<boolean>;
    isAborted: import("vue").Ref<boolean>;
    isCanceled: import("vue").Ref<boolean>;
    execute: () => Promise<any>;
};
