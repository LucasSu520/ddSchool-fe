import { createRouter , createWebHistory} from "vue-router";
import abc from './components/abc.vue'
import login from './components/login.vue'
import index from "./components/index.vue"
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component: index
        },
        {
            path:'/abc',
            component: abc
        },
        {
            path:'/login',
            component: login
        }
    ]
});
export default router;