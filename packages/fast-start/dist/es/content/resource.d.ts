export type Resource = {
    name: string;
};
export declare const RESOURCE_CONTEXT: unique symbol;
export declare const createResourceProvider: (content: Resource) => void;
export declare const useResourceContext: () => {
    name: string;
};
