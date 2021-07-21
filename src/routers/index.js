import VueRouter from 'vue-router'
import FrontPage from '@/components/frontPage/FrontPage.vue'
import OrderPage1 from '@/components/orderPage1/OrderPage1.vue'
import OrderPage2 from '@/components/orderPage2/OrderPage2.vue'
import OrderPage3 from '@/components/orderPage3/OrderPage3.vue'
import Error404Page from '@/components/Error404Page.vue'
import ContactPage from '@/components/contactPage/ContactPage.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FrontPage,
    },
    {
      path: '/order1',
      component: OrderPage1
    },
    {
      path: '/order2',
      component: OrderPage2,
    },
    {
      path: '/order3',
      component: OrderPage3,
    },
    {
      path: '*',
      component: Error404Page,
    },
    {
      path: 'contact',
      component: ContactPage,
    }
  ],
})