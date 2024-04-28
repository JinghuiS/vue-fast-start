import type { HTTPClient } from "./http/request"

export type Identifier = string | number

export interface BasicRecord {
    [key: string]: any
}

export interface SortPayload {
    field: string
    order: string
}
export interface FilterPayload {
    [k: string]: any
}

export interface PaginationPayload {
    page: number
    perPage: number
}

export type LegacyDataProvider = (type: string, resource: string, params: any) => Promise<any>

export type DataProvider<ResourceType extends string = string> = {
    getList: <RecordType = any>(
        resource: ResourceType,
        params: GetListParams
    ) => Promise<GetListResult<any>>

    getOne: <RecordType extends BasicRecord = any>(
        resource: ResourceType,
        params: GetOneParams
    ) => Promise<GetOneResult<RecordType>>

    update: <RecordType extends BasicRecord = any>(
        resource: ResourceType,
        params: UpdateParams
    ) => Promise<UpdateResult<RecordType>>

    create: <RecordType extends BasicRecord = any>(
        resource: ResourceType,
        params: CreateParams
    ) => Promise<CreateResult<RecordType>>

    deleteOne: <RecordType extends BasicRecord = any>(
        resource: ResourceType,
        params: DeleteParams<RecordType>
    ) => Promise<DeleteResult<RecordType>>

    httpClient: HTTPClient
    [key: string]: any
}

export interface GetListParams {
    pagination: PaginationPayload

    filter: Record<string, any>
}

export interface GetListResult<RecordType = any> {
    data: RecordType[]
    total?: number
}

export interface SortPayload {
    field: string
    order: string
}

export interface GetOneParams<RecordType extends BasicRecord = any> {
    id: RecordType["id"]
    meta?: any
}

export interface GetOneResult<RecordType extends BasicRecord = any> {
    data: RecordType
}

export interface GetManyParams {
    ids: Identifier[]
    meta?: any
}

export interface GetManyResult<RecordType extends BasicRecord = any> {
    data: RecordType[]
}

export interface GetManyReferenceParams {
    target: string
    id: Identifier
    pagination: PaginationPayload
    sort: SortPayload
    filter: any
    meta?: any
}

export interface GetManyReferenceResult<RecordType extends BasicRecord = any> {
    data: RecordType[]
    total?: number
    pageInfo?: {
        hasNextPage?: boolean
        hasPreviousPage?: boolean
    }
}

export interface UpdateParams<T = any> {
    id: Identifier
    data: Partial<T>
    previousData: T
    meta?: any
}

export interface UpdateResult<RecordType extends BasicRecord = any> {
    data: RecordType
}

export interface UpdateManyParams<T = any> {
    ids: Identifier[]
    data: T
    meta?: any
}

export interface UpdateManyResult<RecordType extends BasicRecord = any> {
    data?: RecordType["id"][]
}

export interface CreateParams<T = any> {
    data: T
    meta?: any
}

export interface CreateResult<RecordType extends BasicRecord = any> {
    data: RecordType
}

export interface DeleteParams<RecordType extends BasicRecord = any> {
    id: RecordType["id"]
    data?: any
}

export interface DeleteResult<RecordType extends BasicRecord = any> {
    data: RecordType
}

export interface DeleteManyParams<RecordType extends BasicRecord = any> {
    ids: RecordType["id"][]
    meta?: any
}

export interface DeleteManyResult<RecordType extends BasicRecord = any> {
    data?: RecordType["id"][]
}

/**
 * authProvider types
 */
export interface AuthProvider {
    login: (params: any) => Promise<{ redirectTo?: string | boolean } | void | any>
    logout: (params: any) => Promise<void | false | string>
    checkAuth: (params?: any) => Promise<void>
    checkError: (error: any) => Promise<void>
}

export interface UserIdentity {
    id: Identifier
    fullName?: string
    avatar?: string
    [key: string]: any
}

export type AuthRedirectResult = {
    redirectTo?: string | false
    logoutOnFailure?: boolean
}

export type Exporter = (
    data: any,
    fetchRelatedRecords: (data: any, field: string, resource: string) => Promise<any>,
    dataProvider: DataProvider,
    resource: string
) => void | Promise<void>

export interface GetInfiniteListResult<RecordType extends BasicRecord = any>
    extends GetListResult<RecordType> {
    pageParam?: number
}
