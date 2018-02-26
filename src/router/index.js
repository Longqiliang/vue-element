import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from '@/components/Container'
import SwiperCss from '@/components/SwiperCss'
import DatePicker from '@/components/datePicker'
import Calendar from '@/components/calendar'
import Layout from '../views/layout/Layout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/table',
      name: 'Table',
      component: Layout,
      hidden: true,
      children: [{
        path: 'table',
        component: Container
      }]
    },
    {
      path: '/example',
      name: 'Example',
      redirect: '/example/table',
      meta: {title: 'Example', icon: 'example'},
      component: Layout,
      children: [
        {
          path: 'table',
          name: 'Table',
          component: Container,
          meta: {title: 'Table', icon: 'table'}
        },
        {
          path: 'calendar',
          name: 'Calendar',
          component: Calendar,
          meta: {title: 'Calendar', icon: 'calendar'}
        },
        {
          path: 'swiperCss',
          name: 'SwiperCss',
          component: SwiperCss,
          meta: { title: 'SwiperCss', icon: 'eye' }
        },
        {
          path: 'datePicker',
          name: 'DatePicker',
          component: DatePicker,
          meta: { title: 'DatePicker', icon: 'datepicker' }
        }
      ]
    },
    {
      path: '/helloWorld',
      component: Layout,
      meta: {title: 'HelloWorld', icon: 'index'},
      children: [
        {
          path: '',
          name: 'Index',
          component: HelloWorld,
          meta: { title: 'Index', icon: 'index' }
        },
        {
          path: 'menu',
          name: 'Menu',
          component: () => import('@/views/menu/Menu'),
          meta: { title: 'Menu', icon: 'tree' }
        }
      ]
    }
  ]
})
