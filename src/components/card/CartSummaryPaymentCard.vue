<template>
    <div class="cart-item-card">
        <h3>Cart Total: ${{cart_total.toFixed(2)}}</h3>
    </div>
    <!-- <button class="view-product-button"> Pay Credit Card

    </button> -->
</template>

<script>
export default {
    props: ['products'],
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>