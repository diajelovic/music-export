import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-light.css';

import App from './App';

Vue.use(VueMaterial);

new Vue({ el: '#app', render: h => h(App) });
