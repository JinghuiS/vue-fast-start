declare const _default: <T>(__VLS_props: {
    when: T | undefined | null | false;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    slots: {
        default?(_: {
            value: NonNullable<T>;
        }): any;
    };
    attrs: any;
    emit: any;
}, __VLS_expose?: (exposed: import('vue').ShallowUnwrapRef<{}>) => void, __VLS_setup?: Promise<{
    props: {
        when: T | undefined | null | false;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {
            value: NonNullable<T>;
        }): any;
    };
    emit: any;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            when: T | undefined | null | false;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {
                value: NonNullable<T>;
            }): any;
        };
        emit: any;
    };
};
export default _default;
type __VLS_OmitKeepDiscriminatedUnion<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
