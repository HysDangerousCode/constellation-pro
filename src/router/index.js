import { createRouter, createWebHistory } from 'vue-router'
import TodayPage from "@/views/Today"

const routes = [{
        path: "/",
        name: "today",
        component: TodayPage
    },
    {
        path: "/tomorrow",
        name: "today",
        component: () => { '@/views/Tomorrow' }
    },
    {
        path: "/week",
        name: "today",
        component: () => { '@/views/Week' }

    },
    {
        path: "/month",
        name: "today",
        component: () => { '@/views/Month' }
    },
    {
        path: "/year",
        name: "today",
        component: () => { '@/views/Year' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router