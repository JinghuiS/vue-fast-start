import { httpClient, createHttpClientInterceptor, type DataProvider } from "@fast-start/core"

const baseHttpClient = createHttpClientInterceptor([], httpClient({ baseUrl: "" }))

export const dataProvider: DataProvider = {
    httpClient: baseHttpClient,
    getList: (resource, params) => {
        return baseHttpClient.get(resource, { params })
    },
    getOne: (resource, params) => {
        return baseHttpClient.get(resource, { params })
    },

    update: (resource, params) => {
        return baseHttpClient.patch(resource, params.data, { params })
    },

    create: (resource, params) => {
        return baseHttpClient.post(resource, params.data, { params })
    },
    deleteOne: (resource, params) => {
        return baseHttpClient.delete(resource, { params })
    }
}
