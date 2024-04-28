import { createResourceFactory } from "@fast-start/core"

export const TestModule = createResourceFactory({
    name: "test",
    listView: () => import("./TestView.vue"),
    createView: () => import("./TestView.vue"),
    editView: () => import("./Test.vue")
})
