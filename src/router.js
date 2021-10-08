import {createRouter, createWebHistory} from 'vue-router'
import RegisterProfissional from './pages/RegisterProfissional.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/register'},
        {path: '/register', component: RegisterProfissional},
        
    ]
});

export default router;