<template>
  <div class="drawer">
    <b-modal id="modal-scoped" title="BootstrapVue">
      <div v-if="product" class="product-details">

        <h3 class="text-center">{{ product.name }}</h3>
        <p class="text-center">{{ product.description }}</p>
        <p class="text-center">${{ product.price.toFixed(2) }}</p>

        <div class="cart-total" v-if="product_total">
          <h3 class="text-center">In Cart:</h3>
          <p>{{ product_total }}</p>
        </div>

        <div class="button-container">
          <b-button class="remove" @click="removeFromCart()"> - </b-button>
          <!-- <div class="cart-total" v-if="product_total">
          <p>{{ product_total }}</p>
          </div> -->
          <b-button class="add" @click="addToCart()"> + </b-button>
        </div>
      </div>
      
      <template #modal-footer="{ cancel, hide }">
  
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button  size="sm" variant="success" @click="cancel()">
        Сontinue Shopping
      </b-button>
      <b-button href="https://bootstrap-vue.org/docs/components/table" size="sm" variant="danger" @click="cancel()">
        Order Buy
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Payment
      </b-button>
    </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
      // return 6
    },
  },
};
</script>
<style lang="scss">
.remove, .add{
  margin: 1rem;
}
.button-container
 {
  display: flex;
  flex-direction: row;
}
.table th {
  vertical-align: middle!important;

}
</style>