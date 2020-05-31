import Vue from 'vue';
import VueRouter from 'vue-router';
import Inbox from "../views/Inbox";
import Outbox from "../views/Outbox";
import Trash from "../views/Trash";
import Send from "../views/Send"

Vue.use(VueRouter);

const routes = [
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
  },
  {
    path: '/outbox',
    name: 'Outbox',
    component: Outbox,
  },
  {
    path: '/trash',
    name: 'Trash',
    component: Trash,
  },
  {
    path: '/send',
    name: 'Send',
    component: Send,
  },
  {
    path: '*',
    redirect: '/inbox'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
