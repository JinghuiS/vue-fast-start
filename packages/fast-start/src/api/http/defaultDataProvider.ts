import type { DataProvider } from "../types"
import { httpClient } from "./request"

export const defaultDataProvider: DataProvider = {
    create: () => Promise.resolve({ data: null } as any), // avoids adding a context in tests
    deleteOne: () => Promise.resolve({ data: null } as any), // avoids adding a context in tests

    getList: () =>
        Promise.resolve({
            data: Array.from({ length: 30 }).map((_, index) => ({
                name: index,
                id: index
            })),
            total: 20
        }), // avoids adding a context in tests
    getMany: () => Promise.resolve({ data: [] }), // avoids adding a context in tests
    getManyReference: () => Promise.resolve({ data: [], total: 0 }), // avoids adding a context in tests
    getOne: () => Promise.resolve({ data: null } as any), // avoids adding a context in tests
    update: () => Promise.resolve({ data: null } as any) // avoids adding a context in tests
}
