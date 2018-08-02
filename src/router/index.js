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
        import('@/views/information/community/index'),
      name: 'index',
      meta: {
        icon: 'index',
        title: '首页'
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
      redirect: 'community/index',
      childHidden: true,
      meta: {
        title: '小区库'
      },
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'index',
        component: () =>
          import('@/views/information/community/index')
      }, {
        path: 'details/:id',
        redirect: 'details/:id/generalization',
        component: () =>
          import('@/views/information/community/detail'),
        children: [{
          path: 'generalization',
          component: () =>
            import('@/views/information/community/generalization')
        }, {
          path: 'facility',
          component: () =>
            import('@/views/information/community/facility')
        }, {
          path: 'organization',
          component: () =>
            import('@/views/information/community/organization')
        }, {
          path: 'committee',
          component: () =>
            import('@/views/information/community/committee')
        },
        {
          path: 'worker',
          component: () =>
            import('@/views/information/community/worker')
        }, {
          path: 'other',
          component: () =>
            import('@/views/information/community/other')
        }]
      }]
    }, {
      path: 'serviceBase',
      name: 'serviceBase',
      redirect: 'serviceBase/index',
      childHidden: true,
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'index',
        component: () =>
          import('@/views/information/serviceBase/property')
      },
      {
        path: 'serviceDetails/:id',
        component: () =>
          import('@/views/information/serviceBase/serviceDetails')

      },
      {
        path: 'project',
        redirect: 'project/library/:id',
        childHidden: true,
        component: () =>
          import('@/views/layout/components/DefaultView'),
        children: [{
          path: 'library/:id',
          component: () =>
            import('@/views/information/serviceBase/projectLibrary')
        },
        {
          path: 'details/:id',
          component: () =>
            import('@/views/information/serviceBase/projectDetails')

        }]

      }],
      meta: {
        title: '物业服务企业库'
      }
    }, {
      path: 'ownerBase',
      name: 'ownerBase',
      redirect: 'ownerBase/index',
      childHidden: true,
      component: () =>
          import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'index',
        component: () =>
        import('@/views/information/ownerBase/index')
      }, {
        path: 'detail/:id',
        component: () =>
        import('@/views/information/ownerBase/detail')
      }],
      meta: {
        title: '业主库'
      }
    }, {
      path: 'manageBase',
      name: 'manageBase',
      component: () =>
        import('@/views/information/manageBase/index'),
      meta: {
        title: '管理架构库'
      }
    }, {
      path: 'policyBase',
      name: 'policyBase',
      redirect: 'policyBase/index',
      childHidden: true,
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'index',
        component: () =>
          import('@/views/information/policyBase/index')
      }, {
        path: 'add',
        component: () =>
          import('@/views/information/policyBase/add')
      }],
      meta: {
        title: '政策法规库'
      }
    }, {
      path: 'integrityBase',
      name: 'integrityBase',
      component: () =>
        import('@/views/information/community/index'),
      meta: {
        title: '诚信库'
      }
    }]
  },
  {
    path: '/transaction',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'transaction',
    meta: {
      icon: 'task',
      title: '事务管理'
    },
    children: [{
      path: 'notice',
      name: 'notice',
      redirect: 'notice/index',
      childHidden: true,
      meta: {
        title: '通知公告'
      },
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'index',
        component: () =>
          import('@/views/transaction/notice/index')
      }, {
        path: 'add',
        component: () =>
          import('@/views/transaction/notice/add')
      }]
    }, {
      path: '/transaction/payments',
      name: 'payments',
      meta: {
        title: '公共资源收支'
      },
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'composite',
        meta: {
          title: '综合管理'
        },
        component: () =>
        import('@/views/transaction/payments/composite/composite')
      }, {
        path: 'expenditure',
        meta: {
          title: '支出管理'
        },
        component: () =>
        import('@/views/transaction/payments/expenditure/expenditure')
      }, {
        path: 'income',
        meta: {
          title: '收入管理'
        },
        component: () =>
        import('@/views/transaction/payments/income/income')
      }]
    }]
  },
  {
    path: '/evaluation',
    component: Layout,
    alwaysShow: true,
    name: 'evaluation',
    meta: {
      icon: 'star',
      title: '星级评定'
    },
    children: [{
      path: 'eventManagement',
      name: 'eventManagement',
      redirect: 'eventManagement/index',
      childHidden: true,
      meta: {
        title: '活动管理'
      },
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'index',
        component: () =>
          import('@/views/evaluation/eventManagement/index')
      }]
    }, {
      path: '/evaluation/satisfactionSurvey',
      name: 'satisfactionSurvey',
      meta: {
        title: '满意度调查'
      },
      component: () =>
        import('@/views/layout/components/DefaultView'),
      children: [{
        path: 'survey',
        meta: {
          title: '调查配置'
        },
        component: () =>
          import('@/views/evaluation/satisfactionSurvey/survey/index')
      }, {
        path: 'other',
        meta: {
          title: '第三方机构调查'
        },
        component: () =>
          import('@/views/evaluation/satisfactionSurvey/other/index')
      }]
    }]
  }, {
    path: '/integrity',
    component: Layout,
    alwaysShow: true,
    meta: {
      icon: 'integrity',
      title: '诚信管理'
    }
  }, {
    path: '/administrative',
    component: Layout,
    alwaysShow: true,
    meta: {
      icon: 'administrative',
      title: '行政管理'
    }
  }, {
    path: '/committee',
    component: Layout,
    alwaysShow: true,
    meta: {
      icon: 'team',
      title: '业委会管理'
    }
  }, {
    path: '/statistics',
    component: Layout,
    alwaysShow: true,
    meta: {
      icon: 'statistics',
      title: '统计报表'
    }
  }
]

export default new Router({
  routes: constantRouterMap
})
