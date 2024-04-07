export type FSMenuType = {
    path: string;
    name: string;
    icon?: string;
    children?: FSMenuType[];
};
export type FsMenuState = {
    menu: FSMenuType[];
};
export declare const useMenuStore: () => {
    state: Readonly<import("vue").Ref<{
        readonly menu: readonly {
            readonly path: string;
            readonly name: string;
            readonly icon?: string;
            readonly children?: readonly any[];
        }[];
    }>>;
    setMenu: (menu: FSMenuType[]) => void;
};
