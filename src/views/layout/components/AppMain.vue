<template>
  <section class="app-main">
    <transition name="fade" mpde="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style>

</style>
