import Vue from 'vue';
import VueRouter from 'vue-router';
import MailBox from '../views/MailBox.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/in',
    name: 'MailBox',
    component: MailBox,
  },
  {
    path: '/out',
    name: 'Outbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MailBox,
  },
  {
    path: '/trash',
    name: 'Trasd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Trash.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
