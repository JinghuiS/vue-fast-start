import { defineComponent } from "vue"
import { type RouteRecordRaw, type RouteComponent } from "vue-router"
import ResourceVue from "./Resource.vue"

type Lazy<T> = () => Promise<T>
export type CreateResourceFactoryConfig = {
    name: string
    label?: string
    listView: RouteComponent | Lazy<RouteComponent>
    detailView?: RouteComponent | Lazy<RouteComponent>
    editView?: RouteComponent | Lazy<RouteComponent>
    createView?: RouteComponent | Lazy<RouteComponent>
}

const createResourceRoutes = (config: CreateResourceFactoryConfig): RouteRecordRaw[] => {
    return [
        {
            path: `/${config.name}`,
            name: config.name,
            component: ResourceVue,
            props: {
                name: config.name
            },
            children: [
                {
                    path: "",
                    name: `${config.name}-list`,
                    component: config.listView
                }
            ]
        }
    ]
}

export const createResourceFactory = (config: CreateResourceFactoryConfig) => {
    const routes = createResourceRoutes(config)

    return {
        routes
    }
}
