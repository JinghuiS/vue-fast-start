import { isString } from "lodash-unified"

export const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
        return false
    }
    return !Number.isNaN(Number(val))
}
