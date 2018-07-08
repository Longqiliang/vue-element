import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
Vue.use(Router)

const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: () =>
        import ('@/views/table/community/index'),
      name: 'index',
      meta: {
        icon: 'index',
        title: '首页'
      }
    }]
  },
  {
    path: '/transaction',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: () =>
        import ('@/views/table/community/index'),
      name: 'transaction',
      meta: {
        icon: 'task',
        title: '事务管理'
      }
    }]
  },
  {
    path: '/information',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'information',
    meta: {
      icon: 'information',
      title: '基本信息库'
    },
    children: [{
      path: 'community',
      name: 'community',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '小区库'
      }
    }, {
      path: 'serviceBase',
      name: 'serviceBase',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '物业服务企业库'
      }
    }, {
      path: 'ownerBase',
      name: 'ownerBase',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '业主库'
      }
    }, {
      path: 'manageBase',
      name: 'manageBase',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '管理架构库'
      }
    }, {
      path: 'policyBase',
      name: 'policyBase',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '政策法规库'
      }
    }, {
      path: 'integrityBase',
      name: 'integrityBase',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '诚信库'
      }
    }]
  },
  {
    path: '/evaluation',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'evaluation',
    meta: {
      icon: 'star',
      title: '星级评定'
    },
    children: [{
      path: 'community',
      name: 'community',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '小区库'
      }
    }]
  }, {
    path: '/integrity',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    meta: {
      icon: 'integrity',
      title: '诚信管理'
    },
    children: [{
      path: 'community',
      name: 'community',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '小区库'
      }
    }]
  }, {
    path: '/administrative',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    meta: {
      icon: 'administrative',
      title: '行政管理'
    },
    children: [{
      path: 'community',
      name: 'community',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '小区库'
      }
    }]
  }, {
    path: '/committee',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    meta: {
      icon: 'team',
      title: '业委会管理'
    },
    children: [{
      path: 'community',
      name: 'community',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '小区库'
      }
    }]
  }, {
    path: '/statistics',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    meta: {
      icon: 'statistics',
      title: '统计报表'
    },
    children: [{
      path: 'community',
      name: 'community',
      component: () =>
        import ('@/views/table/community/index'),
      meta: {
        title: '小区库'
      }
    }]
  }
]

export default new Router({
  routes: constantRouterMap
})
