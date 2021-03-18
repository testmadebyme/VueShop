<template>
  <div class="cart">
    <h1>This is an Shopping Cart</h1>

    <CartItemCard
     v-for="(product) in products"
     :key="product.id"
     :product="product"
     
     /> 

    <CartSummaryPaymentCard
    :products="products"/>
 </div> 
</template>

<script>
import CartItemCard from '../components/card/CartItemCard.vue'
import CartSummaryPaymentCard from '../components/card/CartSummaryPaymentCard.vue'

export default {
    components: {
        CartItemCard, CartSummaryPaymentCard
    },
    computed: {
        products() {
            return this.$store.getters.cartItems
        }
    },
    methods: {
        deleteFromCart(index) {
        this.$store.dispatch('deleteFromCart', index)
        },
    }
    
}
</script>
