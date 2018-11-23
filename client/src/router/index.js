import Vue from 'vue';
import Router from 'vue-router';
import CreateUser from '@/components/CreateUser';
import HomePage from '@/components/HomePage';
import Login from '@/components/Login';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: HomePage},
    {path: '/register', component: CreateUser},
    {path: '/login', component: Login},
    {path: '*', redirect: '/'}]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  
  next();
})
