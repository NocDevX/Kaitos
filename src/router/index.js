import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';

const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: AuthView,
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (window.getCookie('authenticated') === 'true') {
            next();
            return;
        }

        alert("Thou shan't be granted access whilst not logged in.");
        next('/auth');
    } else {
        next();
    }
});

export default router;
