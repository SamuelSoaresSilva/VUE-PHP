import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFound from '@/components/utiils/NotFound.vue'

// for disableHeader use meta:{disableHeader:true}

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
      meta:{ disableHeader: true, disableFooter: true}
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:{
        title: 'NoStore'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta:{
        title: 'About'
      }
    }
  ]
});


export default routes
