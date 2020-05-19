import Vue from 'vue';
import VueRouter from 'vue-router';
import MailBox from '../views/MailBox.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inbox',
    component: MailBox,
  },
  {
    path: '/out',
    name: 'Outbox',
    component: MailBox,
  },
  {
    path: '/trash',
    name: 'Trasd',
    component: MailBox,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
