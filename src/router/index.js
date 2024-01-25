import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
    {
        path: '/inicio',
        name: 'inicio',
        component:()=>import('../components/Inicio.vue')
    },
    {
        path:'/paginacion',
        name:'paginacion',
        component:()=>import('../components/Persona.vue')
    },
    // {
    //     path: '/formulario',
    //     name: 'formulario',
    //     component:()=>import('../components/Formulario.vue')
    // },
    {
        path: '*',
        component:()=>import('../views/ErrorPage.vue')
    },
    {
        path: '/inicio',
        name: 'inicio',
        component:()=>import('../components/Inicio.vue'),
        children:[
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
            },
            {
                path: '/formulario',
                name: 'formulario',
                component:()=>import('../components/Formulario.vue')
            },
        ]
    }

]

const router = new VueRouter({routes,})
export default router;