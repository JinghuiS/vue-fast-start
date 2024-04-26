import { useUrlSearchParams } from "@vueuse/core"
import { useFastStartContext } from "../context/fast-start"
import { parse, stringify } from "qs"
import type { IParseOptions, IStringifyOptions } from "qs"
type UrlState = Record<string, any> | undefined

export interface UseUrlStateOptions<T> {
    nestedKey?: string
    parseOptions?: IParseOptions
    stringifyOptions?: IStringifyOptions
    // initialState?: T
    // parseOptions?: IParseOptions
    // stringifyOptions?: IStringifyOptions
}

const baseParseConfig: IParseOptions = {
    ignoreQueryPrefix: true
}

const baseStringifyConfig: IStringifyOptions = {
    skipNulls: true
}
type State<T> = Partial<{ [key in keyof T]: any }>
export function useUrlState(initialState: any, options: UseUrlStateOptions<UrlState>) {
    const { routerMode } = useFastStartContext()

    const mergedParseOptions = { ...baseParseConfig, ...options.parseOptions }
    const mergedStringifyOptions = {
        ...baseStringifyConfig,
        ...options.stringifyOptions
    }

    const _initialState = options.nestedKey
        ? {
              [options.nestedKey]: stringify(initialState || "{}", mergedStringifyOptions)
          }
        : initialState

    const params = useUrlSearchParams(routerMode || "hash", { initialValue: _initialState })

    const generateQueryToUrl = (newQuery: Record<string, any>) => {
        if (options?.nestedKey) {
            params[options.nestedKey] = stringify(newQuery, mergedStringifyOptions)
        } else {
            Object.entries(newQuery).forEach(([key, value]) => {
                params[key] = value
            })
        }
    }

    const setState = (newQuery: State<any>) => {
        generateQueryToUrl(newQuery)
    }

    const state = options.nestedKey
        ? (parse(params[options.nestedKey] || "{}", mergedParseOptions) as Record<string, unknown>)
        : params

    return [state, setState]
}
