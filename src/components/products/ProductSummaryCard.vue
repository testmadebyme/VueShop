<template>
  <div class="shop-page">
    
    <div class="card-item">
    
      <b-card
       
        img-alt="Image-item"
        img-top
        tag="cart"
        style="max-width: 20rem"
        class="mb-2"
      >
      <img class="product-image" :src="require('../../assets/' +product.image  )">
        <b-card-title>{{ product.name }}</b-card-title>
        
        <b-card-body>
          <b-card-text>{{ description }}</b-card-text>
          <b-card-price> Price: $ {{ product.price.toFixed(2) }} </b-card-price>
        </b-card-body>

        <b-button v-b-modal.modal-scoped
          class="view-product-button"
          @click="$emit('view-product', product)"
          variant="success"
          >Buy Product</b-button>
      
      </b-card>
    </div>  
  </div>

  
</template>

<script>
export default {
  // name: 'ProductSummaryCard',
  props: ["product"],
  
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>

<style lang="scss">
.shop-page {
  margin: 0.5rem;
}
.card-item {
  margin: 1rem;
}

.product-image {
  width: 210px;
  height: 360px;
}
</style>


