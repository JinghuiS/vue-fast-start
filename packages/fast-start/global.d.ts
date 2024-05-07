declare module "vue" {
    export interface GlobalComponents {
        FastStars: typeof FastStars
        FsDialog: typeof import("@fast-start/core")["FsDialog"]
        FsPopupFooter: typeof import("@fast-start/core")["FsPopupFooter"]
        FsTableDelete: typeof import("@fast-start/core")["FsTableDelete"]
        FsResource: typeof import("@fast-start/core")["FsResource"]
        FsForm: typeof import("@fast-start/core")["FsForm"]
        FsFormItem: typeof import("@fast-start/core")["FsFormItem"]
        If: typeof import("@fast-start/core")["If"]
        For: typeof import("@fast-start/core")["For"]
        Switch: typeof import("@fast-start/core")["Switch"]
        Match: typeof import("@fast-start/core")["Match"]
    }
}
export {}
