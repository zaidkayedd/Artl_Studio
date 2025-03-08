import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Services from '@/views/Services.vue'
import Technologies from '@/views/Technologies.vue'
import Process from '@/views/Process.vue'
import Pricing from '@/views/Pricing.vue'
import FAQ from '@/views/FAQ.vue'
import ContactUs from '@/views/ContactUs.vue'
// import LoadingPage from '@/components/LoadingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: Technologies,
    },
    {
      path: '/process',
      name: 'process',
      component: Process,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
    },
    // {
    //   path: '/loadingPage',
    //   name: 'loadingPage',
    //   component: LoadingPage,
    // },
  ],
})

export default router
