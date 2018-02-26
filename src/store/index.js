import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import * as actions from './actions'
import cart from './modules/cart'
import products from './modules/product'
import getters from './getters'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  }
}
const moduleA = {
  state, mutations
}
export default new Vuex.Store({
  actions,
  modules: {
    app,
    a: moduleA,
    products,
    cart
  },
  getters
})
