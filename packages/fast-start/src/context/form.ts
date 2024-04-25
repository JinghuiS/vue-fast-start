import { injectLocal, provideLocal } from "@vueuse/core"
import { type FormContext } from "vee-validate"

export const FORM_PROVIDER_CONTEXT = Symbol("FORM_PROVIDER_CONTEXT")

export const createFormProvider = (context: FormContext<any, any>) => {
    return provideLocal(FORM_PROVIDER_CONTEXT, context)
}
export const useFormContext = () => {
    return injectLocal<FormContext<any, any>>(FORM_PROVIDER_CONTEXT)
}
