import type { FormContext, GenericObject } from "vee-validate"
import { ref } from "vue"

export function useFsForm<T extends GenericObject = GenericObject>() {
    const fsForm = ref<FormContext<T>>()

    return [fsForm]
}
