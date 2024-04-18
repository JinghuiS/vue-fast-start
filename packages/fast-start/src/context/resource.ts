import { inject, provide } from "vue"

export type Resource = {
    name: string
}

export const RESOURCE_CONTEXT = Symbol("RESOURCE_CONTEXT")

export const createResourceProvider = (context: Resource) => {
    return provide(RESOURCE_CONTEXT, context)
}

export const useResourceContext = () => {
    return inject(RESOURCE_CONTEXT, { name: "" })
}
