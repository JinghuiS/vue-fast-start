import "overlayscrollbars/styles/overlayscrollbars.css"
import {
    FastStars,
    FsDialog,
    FsPopupFooter,
    FsDataTable,
    FsResource,
    FsForm,
    FsFormItem
} from "./components"
import { If, Switch, Match, For } from "@fast-start/control-flow"

export * from "./components"
export * from "./context/resource"
// export * from "./install"
export * from "./store/menu"
export * from "./external"

function install(app: any) {
    const FsComponents = [
        FastStars,

        If,
        Switch,
        Match,
        For,

        FsDialog,
        FsPopupFooter,
        FsDataTable,

        FsResource,

        FsForm,
        FsFormItem
    ]
    FsComponents.map((e) => {
        app.component(e.name, e)
    })
    // for (const [key, component] of Object.entries(FsComponents)) {
    //     app.component(key, component)
    // }
    // console.log(FsComponents)
}

export default { install }
