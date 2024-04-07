export declare class HttpError extends Error {
    readonly message: string;
    readonly status: number;
    readonly body: any;
    constructor(message: string, status: number, body?: any);
}
