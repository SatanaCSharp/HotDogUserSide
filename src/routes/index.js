import Vue from 'vue'
import Router from 'vue-router'
import HotDogsList from '../components/hot_dogs/HotDogsList';
import HotDogShow from '../components/hot_dogs/HotDogShow';
import HotDogCreate from '../components/hot_dogs/HotDogCreate';
import HotDogUpdate from '../components/hot_dogs/HotDogUpdate';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'HotDogsList',
        component: HotDogsList,
    },
    {
        path: '/show/hot-dog/:id',
        name: 'HotDogShow',
        component: HotDogShow,
    },
    {
        path: '/create/hot-dog/',
        name: 'HotDogCreate',
        component: HotDogCreate,
    },
    {
        path: '/update/hot-dog/:id',
        name: 'HotDogUpdate',
        component: HotDogUpdate,
    },
  ]
});