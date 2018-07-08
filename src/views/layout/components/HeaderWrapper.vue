<template>
    <div class="headerWrapper">
        <header class="header">
            <div class="container">
                <h1>
                 <router-link to="index">
                   <img :src="imgUrl" alt="app-logo" class="nav-logo">
                 </router-link>
                </h1>
                <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
                <ul class="nav">
                    <li class="nav-item"><i></i><span>欢迎您，物业监管办</span></li>
                    <li class="nav-item"><i></i><span>退出</span></li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import logo from '@/assets/logo.png'
export default {
  components: {
    Hamburger
  },
  data() {
    return {
      imgUrl: logo
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>


