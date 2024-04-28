import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import { TestModule } from "../views/test"
import { FsLayout } from "@fast-start/core"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "layout",
            component: FsLayout,
            children: [...TestModule.routes]
        }
    ]
})

export default router
