import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFound from '@/components/utiils/NotFound.vue'
import RegisterView from '@/views/user/RegisterLoginView.vue'
import CartView from '@/views/CartView.vue'
import ProductView from "@/views/product/ProductView.vue";
import UpdateLoginView from "@/views/user/UpdateLoginView.vue";
import RegisterProductView from "@/views/product/RegisterProductView.vue";

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
        title: 'About',
        disableFooter: true
      }
    },

    {
      path: '/user/login',
      name: 'user-register',
      component: RegisterView,
      meta: {
        title: 'Register',
        disableHeader: true,
        disableFooter: true
      }
    },

      {
      //transform Id in variable with :userId
      path: '/user/id/cart',
      name: 'cart',
      component: CartView,
      meta:{
        title: 'Cart'
      }
    },
    {
      //transform Id in variable with :userId
      path: '/user/id/update-data',
      name: 'user-update',
      component: UpdateLoginView,
      meta:{
        title: 'User',
        disableFooter: true
      }
    },
    {
      path: '/product/:id',
      name: 'product-page',
      component: ProductView,
      meta:{
        title: 'Product',
      }
    },
    {
      path: '/admin/product/register',
      name: 'product-register',
      component: RegisterProductView,
      meta:{
        title: 'Reg. product',
        disableFooter: true
      }
    }
  ]
});


export default routes
