import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import { TestModule } from "../views/test"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        ...TestModule.routes
    ]
})

export default router
