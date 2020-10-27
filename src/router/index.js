import { createRouter, createWebHistory } from 'vue-router'
import TodayPage from "@/views/Today"

const routes = [{
        path: "/",
        name: "today",
        component: TodayPage
    },
    {
        path: "/tomorrow",
        name: "TomorrowPage",
        component: () => { '../views/Tomorrow' }
    },
    {
        path: "/week",
        name: "WeekPage",
        component: () => { '../views/Week' }
    },
    {
        path: "/month",
        name: "MonthPage",
        component: () => { '../views/Month' }
    },
    {
        path: "/year",
        name: "YearPage",
        component: () => { '../views/Year' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router