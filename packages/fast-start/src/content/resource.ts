import { inject, provide } from "vue"

export type Resource = {
    name: string
}

export const RESOURCE_CONTEXT = Symbol("RESOURCE_CONTEXT")

export const createResourceProvider = (content: Resource) => {
    return provide(RESOURCE_CONTEXT, content)
}

export const useResourceContext = () => {
    return inject(RESOURCE_CONTEXT, { name: "" })
}
