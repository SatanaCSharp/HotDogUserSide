import Vue from 'vue'
import Router from 'vue-router'
import HotDogsList from '../components/hot_dogs/HotDogsList';
import HotDogShow from '../components/hot_dogs/HotDogShow';
import HotDogCreate from '../components/hot_dogs/HotDogCreate';
import HotDogUpdate from '../components/hot_dogs/HotDogUpdate';
import StuffList from '../components/stuff/StuffList';
import StuffCreate from '../components/stuff/StuffCreate';
import StuffUpdate from '../components/stuff/StuffUpdate';
import SpicesList from '../components/spices/SpicesList';
import SpicesCreate from '../components/spices/SpicesCreate';
import SpicesUpdate from '../components/spices/SpicesUpdate';

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
        path: '/show/hot-dogs/:id',
        name: 'HotDogShow',
        component: HotDogShow,
    },
    {
        path: '/create/hot-dogs/',
        name: 'HotDogCreate',
        component: HotDogCreate,
    },
    {
        path: '/update/hot-dogs/:id',
        name: 'HotDogUpdate',
        component: HotDogUpdate,
    },
    {
        path: '/stuff',
        name: 'StuffList',
        component: StuffList,
    },
    {
        path: '/create/stuff',
        name: 'StuffCreate',
        component: StuffCreate,
    },
    {
        path: '/update/stuff/:id',
        name: 'StuffUpdate',
        component: StuffUpdate,
    },
    {
        path: '/spices',
        name: 'SpicesList',
        component: SpicesList,
    },
    {
        path: '/create/spices',
        name: 'SpicesCreate',
        component: SpicesCreate,
    },
    {
        path: '/update/spices/:id',
        name: 'SpicesUpdate',
        component: SpicesUpdate,
    },
  ]
});