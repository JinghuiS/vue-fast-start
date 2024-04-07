import { httpClient, HTTPClient, HttpOptions } from "./request"
export function createInParameter(http = httpClient) {
    const _httpClient: typeof httpClient = (url: string, options: HttpOptions = {}) => {
        if (options.body) {
            options.data = options.body
        }
        return http(url, options)
    }
    return _httpClient
}
