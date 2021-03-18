import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return 1
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
    }

  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 });
        
      }
      state.cartCount++;
      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      console.log(state.cart)
      console.log(item.product.id)
      updateLocalStorage(state.cart)
    },
    
    removeAllCart(state, product){
      state.cart.splice(i => i.id === product.id)
      updateLocalStorage(state.cart)

    },

    deleteFromCart(state, product) {

      let index = state.cart.indexOf(product);

      if (index > -1) {
        let product = state.cart[index];
        state.cartTotal -= product.quantity;

        state.cart.splice(index, 1);
      }

      console.log(state.cart)
      updateLocalStorage(state.cart)
    },
 
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
    DELETE_FROM_CART(context, index ) {
      context.commit('deleteFromCart', index)
    }
  },
  modules: {
  }
})
