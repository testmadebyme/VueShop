<template>
    <div class="cart-item-card">
        <h3>Cart Total: ${{cart_total.toFixed(2)}}</h3>
        <b-button variant="danger" class="delete" @click="removeAllCart()">Remove All Shopping Cart</b-button>
    </div>
</template>

<script>
export default {
    props: ['products'],
    methods: {
        removeAllCart(){
        this.$store.commit('removeAllCart', this.product )
    }
    },
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>