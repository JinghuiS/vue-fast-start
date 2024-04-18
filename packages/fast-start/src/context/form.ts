import { type FormContext } from "vee-validate"
import { inject, provide } from "vue"

export const FORM_PROVIDER_CONTEXT = Symbol("FORM_PROVIDER_CONTEXT")

export const createFormProvider = (context: FormContext<any, any>) => {
    return provide(FORM_PROVIDER_CONTEXT, context)
}
export const useFormContext = () => {
    return inject<FormContext<any, any>>(FORM_PROVIDER_CONTEXT)
}
