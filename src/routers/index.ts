import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/',
            children: [
                {
                    path: '/',
                    component: () => import('@/layout/main/index.vue')
                },
                {
                    path: 'detail',
                    component: () => import('@/views/detail/index.vue')
                },
                {
                    path: 'edit',
                    component: () => import('@/views/edit/index.vue')
                },
                {
                    path: 'user',
                    component: () => import('@/views/user/index.vue')
                }
            ]
        }
    ]
});

export default router;
