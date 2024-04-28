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
    otherViews?: RouteRecordRaw[]
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
                },
                //@ts-ignore
                config.editView && {
                    path: "edit/:id",
                    name: `${config.name}-edit`,
                    component: config.editView
                },
                //@ts-ignore
                config.createView && {
                    path: "create",
                    name: `${config.name}-create`,
                    component: config.createView
                },
                //@ts-ignore
                config.detailView && {
                    path: "detail/:id",
                    name: `${config.name}-detail`,
                    component: config.detailView
                },
                ...(config.otherViews || [])
            ]
        }
    ]
}

export const createResourceFactory = (config: CreateResourceFactoryConfig) => {
    const routes = createResourceRoutes(config)

    const routePath = {
        list: `/${config.name}`,
        edit: (id: any) => `/${config.name}/edit/${id}`,
        create: `/${config.name}/create`,
        detail: (id: any) => `/${config.name}/detail/${id}`
    }

    return {
        name: config.name,
        routes,
        routePath
    }
}
