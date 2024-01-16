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
                path: '/electronics',
                name: 'electronics',
                component: () => import('../components/ToysStore/Electronics.vue')
            },
            {
                path: '/videogames',
                name: 'videogames',
                component: () => import('../components/ToysStore/VideoGames.vue')
            },
            {
                path: '/kitchen',
                name: 'kitchen',
                component: () => import('../components/AppliancesStore/Kitchen.vue')
            },
            {
                path:'/stove',
                name:'stove',
                component: () => import('../components/AppliancesStore/Stove.vue')
            },
            {
                path:'/cleaningProducts',
                name:'cleaningProducts',
                component: ()=> import ('../components/HomeProductsStore/CleaningProducts.vue')
            },
            {
                path:'/industrialDetergents',
                name:'industrialDetergents',
                component: ()=> import ('../components/HomeProductsStore/IndustrialDetergents.vue')
            }
        ]
    }

]

const router = new VueRouter({routes,})
export default router;