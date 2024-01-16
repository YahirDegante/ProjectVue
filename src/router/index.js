import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        children:[
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/componente',
                name: 'componente',
                component: () => import('../components/Componente.vue')
            },
            {
                path:'/componente1',
                name: 'componente1',
                component: () => import('../components/Componente1.vue')
            },
            {
                path:'/electronics',
                name: 'electronics',
                component: () => import('../components/Electronics.vue')
            },

        ]
    }

]

const router = new VueRouter({routes,})
export default router;