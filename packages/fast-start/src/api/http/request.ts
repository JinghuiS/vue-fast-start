import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios"
import { HttpError } from "./error"

export interface HttpOptions extends AxiosRequestConfig {
    baseUrl?: string
    body?: any
    query?: any
}

export async function httpClient<T = any>(url: string, options: HttpOptions = {}) {
    const api = axios.create({
        baseURL: options.baseUrl || ""
    })

    const response = await api({ ...options, url })

    const { status, statusText, headers, body } = {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: response.data
    }

    let json = body as T

    if (status < 200 || status >= 300) {
        return Promise.reject(new HttpError(statusText, status))
    }
    return (await Promise.resolve({ status, headers, body, json })) as {
        status: number
        headers: AxiosResponse["headers"]
        body: T
        json: T
    }
}
export type HTTPClient = typeof httpClient
