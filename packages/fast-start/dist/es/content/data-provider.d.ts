import type { DataProvider } from "../api/types";
export declare const DATA_PROVIDER_CONTEXT: unique symbol;
export declare const createDataProviderProvider: (content: DataProvider) => void;
export declare const useDataProviderContext: () => DataProvider;
