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
        state.cart.push({ ...product, quantity: 1 })
      }
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

    deleteFromCart(state) {

      // let item = state.cart.find(i => i.id === product.id)

      // let id = state.cart[index].key
          // qty = state.cart[index].quantity,
          // product = state.cart.find(i => i.key === id);
          // state.cart.splice(index, 1);
          // product.P += qty;


      console.log(state.cart)
      updateLocalStorage(state.cart)
    },
    // deleteFromCart(id){
    //   for (let index =0; index <this.cart.length; index++) {
    //     if(this.cart[index].id == id){
    //       this.cart.splice(index, 1);
    //       localStorage.setItem('products', JSON.stringify(this.cart))
    //     }
    //     console.log(index)
    //   }

    //   for (const key in this.cart) {
    //     this.cart[key].cart=false
    //     this.cart[key].quantity=1
    //   }
    //   localStorage.setItem('products', JSON.stringify(this.cart))
    //   this.$refs['modal-1'].hide()

    // },
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
