import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
import KeenUI from 'keen-ui';

import {
    store
} from './store';

import App from './vue/App.vue';
import PageMain from './vue/PageMain.vue';


// Vue.component('inf-table', Table);


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(KeenUI);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'main',
            component: PageMain
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
sync(store, router);

const app = new Vue({
    el: '#vue-content',
    store,
    router,
    render(h) {
        return h(App);
    }
})