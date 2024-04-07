import { createGlobalState } from "@vueuse/core"
import { ref, readonly } from "vue"

export type FSMenuType = {
    path: string
    name: string
    icon?: string
    children?: FSMenuType[]
}
export type FsMenuState = {
    menu: FSMenuType[]
}

export const useMenuStore = createGlobalState(() => {
    const state = ref<FsMenuState>({
        menu: []
    })
    function setMenu(menu: FSMenuType[]) {
        state.value.menu = menu
    }
    return {
        state: readonly(state),
        setMenu
    }
})
