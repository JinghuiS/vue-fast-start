import { App } from "vue"
import { vAcl } from "./acl"

const directives = [vAcl]

export const installDirective = (app: App) => {
    directives.map((directive) => {
        const { name, directiveLifeCycle } = directive()

        app.directive(name, directiveLifeCycle)
    })
}
