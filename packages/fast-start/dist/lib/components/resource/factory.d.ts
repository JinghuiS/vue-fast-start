import { type RouteRecordRaw, type RouteComponent } from "vue-router";
type Lazy<T> = () => Promise<T>;
export type CreateResourceFactoryConfig = {
    name: string;
    label?: string;
    listView: RouteComponent | Lazy<RouteComponent>;
    detailView?: RouteComponent | Lazy<RouteComponent>;
    editView?: RouteComponent | Lazy<RouteComponent>;
    createView?: RouteComponent | Lazy<RouteComponent>;
};
export declare const createResourceFactory: (config: CreateResourceFactoryConfig) => {
    routes: RouteRecordRaw[];
};
export {};
