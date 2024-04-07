import { type Component } from "vue";
import type { DataProvider } from "../api/types";
import { FSMenuType } from "../store/menu";
export type FastStarsProps = {
    rowKey?: string;
    basename?: string;
    dataProvider?: DataProvider;
    layout?: Component;
    useTheme?: boolean;
    menu?: FSMenuType[];
};
export declare const DEFAULT_FAST_START_CONTEXT: FastStarsProps;
export declare const FAST_START_CONTEXT: unique symbol;
export declare const createFastStartProvider: (content: FastStarsProps) => void;
export declare const useFastStartContext: () => FastStarsProps;
