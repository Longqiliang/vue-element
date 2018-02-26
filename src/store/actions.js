import * as types from './mutaions'
export const changeStyle = makeAction('CHANGE_STYLE')
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
