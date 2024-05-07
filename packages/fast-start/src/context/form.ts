import { injectLocal, provideLocal } from "@vueuse/core"
import { type FormContext } from "vee-validate"

export const FORM_PROVIDER_CONTEXT = Symbol("FORM_PROVIDER_CONTEXT")

interface FormContextType extends FormContext<any, any> {
    row?: boolean
    layout?: {
        span?: number
        offset?: number
        push?: number
        pull?: number
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
}

export const createFormProvider = (context: FormContextType) => {
    return provideLocal(FORM_PROVIDER_CONTEXT, context)
}
export const useFormContext = () => {
    return injectLocal<FormContextType>(FORM_PROVIDER_CONTEXT)
}
