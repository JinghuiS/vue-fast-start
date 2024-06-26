declare module "vue" {
    export interface GlobalComponents {
        FastStars: typeof import("@fast-start/core")["FastStars"]
        FsDialog: typeof import("@fast-start/core")["FsDialog"]
        FsPopupFooter: typeof import("@fast-start/core")["FsPopupFooter"]
        FsDataTable: typeof import("@fast-start/core")["FsDataTable"]
        FsResource: typeof import("@fast-start/core")["FsResource"]
        FsForm: typeof import("@fast-start/core")["FsForm"]
        FsFormItem: typeof import("@fast-start/core")["FsFormItem"]
        If: typeof import("@fast-start/core")["If"]
        For: typeof import("@fast-start/core")["For"]
        Switch: typeof import("@fast-start/core")["Switch"]
        Match: typeof import("@fast-start/core")["Match"]
    }
    export interface ComponentCustomProperties {
        vAcl: string
    }
}
export {}
