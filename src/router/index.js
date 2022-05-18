import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import ProductView from '../views/ProductView'
import ContactView from '../views/ContactView'

const routes = [
      {
        path : '/',
        name : 'Homepage',
        component : HomeView
      },
      {
        path : '/about',
        name : 'About Us',
        component : AboutView
      },
      {
        path : '/product',
        name : 'Our Product',
        component : ProductView,
      },
      {
        path : '/contact',
        name : 'Contact Us',
        component : ContactView
      }
      
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`
    next()
  })

  export default router