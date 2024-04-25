import "overlayscrollbars/styles/overlayscrollbars.css"
import {
    FastStars,
    FsDialog,
    FsPopupFooter,
    FsDataTable,
    FsResource,
    FsForm,
    FsFormItem
} from "../components"
import { If, Switch, Match, For } from "@fast-start/control-flow"

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

export const FastStartCore = () => {
    return {
        install: (app: any) => {
            FsComponents.map((e) => {
                app.component(e.name, e)
            })
            // for (const [key, component] of Object.entries(FsComponents)) {
            //     app.component(key, component)
            // }
            // console.log(FsComponents)
        }
    }
}
