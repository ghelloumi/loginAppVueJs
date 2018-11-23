// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import {store} from './store';
import {router} from './router';
import App from './App';

Vue.use(VeeValidate);

// setup fake backend
import {configureFakeBackend} from './helpers';

configureFakeBackend();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
