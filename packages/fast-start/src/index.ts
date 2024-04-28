import "overlayscrollbars/styles/overlayscrollbars.css"
import {
    FastStars,
    FsDialog,
    FsPopupFooter,
    FsDataTable,
    FsResource,
    FsForm,
    FsFormItem,
    FsLayout,
    FsTableActionColumn
} from "./components"
import { If, Switch, Match, For } from "@fast-start/control-flow"
import type { App } from "vue"
import { installDirective } from "./directive/install"

export * from "./hooks"
export * from "./api"
export * from "./components"
export * from "./context/resource"
// export * from "./install"
export * from "./store/menu"
export * from "./store/acl"
export * from "./external"
export * from "./api/useCreate"
export * from "./api/useUpdate"
export * from "./api/useCurd"
export * from "./api/useGetList"
export * from "./api/useGetOne"
export function install(app: App) {
    const FsComponents = [
        FastStars,
        FsLayout,
        If,
        Switch,
        Match,
        For,

        FsDialog,
        FsPopupFooter,
        FsDataTable,
        FsTableActionColumn,

        FsResource,

        FsForm,
        FsFormItem
    ]
    FsComponents.map((e) => {
        if (e.name) {
            app.component(e.name, e)
        }
    })
    installDirective(app)
    // for (const [key, component] of Object.entries(FsComponents)) {
    //     app.component(key, component)
    // }
    // console.log(FsComponents)
}

export default { install }
