import { isNumber, isString } from "lodash-unified"
import { isStringNumber } from "./check"

export function addUnit(value?: string | number, defaultUnit = "px") {
    if (!value) return ""
    if (isNumber(value) || isStringNumber(value)) {
        return `${value}${defaultUnit}`
    } else if (isString(value)) {
        return value
    }
    // debugWarn(SCOPE, "binding value must be a string or number")
}
