import Vue from 'vue';
import VueRouter from 'vue-router';
import Inbox from "../views/Inbox";
import Outbox from "../views/Outbox";
import Trash from "../views/Trash";
import Send from "../views/Send"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
    name: 'Trasd',
    component: Trash,
  },
  {
    path: '/send',
    name: 'Send',
    component: Send,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
