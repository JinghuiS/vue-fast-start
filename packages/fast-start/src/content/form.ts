import { type FormContext } from "vee-validate"
import { inject, provide } from "vue"

export const FORM_PROVIDER_CONTENT = Symbol("FORM_PROVIDER_CONTENT")

export const createFormProvider = (content: FormContext<any, any>) => {
    return provide(FORM_PROVIDER_CONTENT, content)
}
export const useFormContext = () => {
    return inject<FormContext<any, any>>(FORM_PROVIDER_CONTENT)
}
