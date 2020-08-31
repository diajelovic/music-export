import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import infiniteScroll from 'vue-infinite-scroll';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-light.css';

import App from './App';
import Auth from './pages/auth';
import Profile from './pages/profile';
import DeezerLogin from './pages/deezer-login';

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(infiniteScroll);

const routes = [
  { path: '/', component: Auth },
  { path: '/profile', component: Profile },
  { path: '/deezer-login', component: DeezerLogin },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({ el: '#app', router, render: h => h(App) });
