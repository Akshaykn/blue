import welcome from './components/welcome.vue';
import main from './components/container/main';
import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);


const routes = [
    {path:'/',component:welcome},
    {path:'/main',component:main},
];

export const router = new VueRouter({
   routes,
   mode:'history',
}) 

export default router;