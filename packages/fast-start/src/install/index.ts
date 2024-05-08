import {
    FastStart,
    FsDialog,
    FsPopupFooter,
    FsTableDelete,
    FsResource,
    FsForm,
    FsFormItem,
    FsLayout,
    FsData,
    FsSearchForm
} from "../components"
import { If, Switch, Match, For } from "@fast-start/control-flow"
import { App } from "vue"
import { I18nOptions, createI18n } from "vue-i18n"
import { installDirective } from "../directive/install"

export type FastStartCoreInstallOptions = {
    i18n?: I18nOptions
}

export function install(app: App, options: FastStartCoreInstallOptions = {}) {
    if (options.i18n) {
        const vI18n = createI18n(options.i18n)
        app.use(vI18n)
    }

    const FsComponents = [
        FastStart,
        FsLayout,
        If,
        Switch,
        Match,
        For,
        FsDialog,
        FsPopupFooter,
        FsTableDelete,
        FsData,
        FsResource,
        FsForm,
        FsFormItem,
        FsSearchForm
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
