import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig
} from "axios"
import { type HttpOptions, httpClient } from "./request"

export interface HttpResponse<T = any> extends AxiosResponse<T> {}
export type HttpRequest<D = any> = InternalAxiosRequestConfig<D>

export interface HttpClientInterceptor {
    request(
        request: InternalAxiosRequestConfig
    ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
    requestError?(error: any): Promise<any> | any
    response(response: HttpResponse): HttpResponse | Promise<HttpResponse>
    responseError?(error: any): Promise<any> | any
}

const defaultError = (error: any) => {
    console.error(error)
    return Promise.reject(error)
}
export function createHttpClientInterceptor(
    interceptors: HttpClientInterceptor[] = [],
    http: AxiosInstance
) {
    const _axios = http
    interceptors.forEach((interceptor) => {
        _axios.interceptors.request.use(
            (...args) => {
                return interceptor.request(...args)
            },
            (error) => {
                if (interceptor.requestError) {
                    return interceptor.requestError(error)
                }
                return defaultError(error)
            }
        )
        _axios.interceptors.response.use(
            (...args) => {
                return interceptor.response(...args)
            },
            (error) => {
                if (interceptor.responseError) {
                    return interceptor.responseError(error)
                }
                return defaultError(error)
            }
        )
    })

    return _axios
}
