<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="routePath" unique-opened  background-color="#5276f0" :collapse="isCollapse" text-color="#fff" active-text-color="#e58500">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
export default {
  components: {
    SidebarItem,
    ScrollBar
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes () {
      // console.log(this.$router.options.routes)
      // console.log(this.$route)
      return this.$router.options.routes
    },
    routePath () {
      let arr = this.$route.path.split('/')
      let path
      if (arr[1] !== 'index') {
        if (arr[2] === 'payments' || arr[2] === 'satisfactionSurvey') {
          path = `/${arr[1]}/${arr[2]}/${arr[3]}`
        } else {
          path = `/${arr[1]}/${arr[2]}`
        }
      } else {
        path = `/${arr[1]}`
      }
      return path
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>

<style>

</style>
