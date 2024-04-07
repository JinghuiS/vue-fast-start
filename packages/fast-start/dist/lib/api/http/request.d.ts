import { type AxiosRequestConfig, type AxiosResponse } from "axios";
export interface HttpOptions extends AxiosRequestConfig {
    baseUrl?: string;
    body?: any;
    query?: any;
}
export declare function httpClient<T = any>(url: string, options?: HttpOptions): Promise<{
    status: number;
    headers: AxiosResponse["headers"];
    body: T;
    json: T;
}>;
export type HTTPClient = typeof httpClient;
