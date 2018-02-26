<template>
  <ul>
    <li v-for="(product, i) in products" :key="i">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button 
        :disabled="!product.inventory"
        @click="addToCart(product)">Add to cart</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'
export default {
  name: 'ProductList',
  store,
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style>

</style>
