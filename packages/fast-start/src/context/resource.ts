import { injectLocal, provideLocal } from "@vueuse/shared"

export type Resource = {
    name: string
}

export const RESOURCE_CONTEXT = Symbol("RESOURCE_CONTEXT")

export const createResourceProvider = (context: Resource) => {
    return provideLocal(RESOURCE_CONTEXT, context)
}

export const useResourceContext = () => {
    return injectLocal(RESOURCE_CONTEXT, { name: "" })
}
