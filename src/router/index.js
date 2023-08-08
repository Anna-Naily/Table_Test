import { createRouter, createWebHistory } from 'vue-router';
import MainComp from '../components/MainComp.vue';
import EditComp from '../components/EditComp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComp
  },
  {
    path: '/edit/:id',
    name: 'EditComp',
    component: EditComp
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
