<template>
  <div>
    <h3 class="navbar-title">
      {{list[list.length - 1].meta.title}}
    </h3>
    <el-menu class="navbar">
      <breadcrumb :list="list"></breadcrumb>
    </el-menu>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  data () {
    return {
      list: null
    }
  },
  created () {
    this.getRoute()
  },
  watch: {
    $route () {
      this.getRoute()
    }
  },
  methods: {
    getRoute () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== 'index') {
        matched = [{path: '/index', meta: {title: '首页'}}].concat(matched)
      }
      this.list = matched
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &-title{
    margin: 0;
    font-size: 23px;
    font-weight: 500;
  }
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
}
</style>

