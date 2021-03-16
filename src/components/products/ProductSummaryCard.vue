<template>
  <div>
    <div class="card-item">
      <b-card
       
        img-alt="Image-item"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-title>{{ product.name }}</b-card-title>

        <b-card-body>
           <!-- <img :src="require('../../assets/' + product.image )"> -->
          <b-card-text>{{ description }}</b-card-text>
          <b-card-price> Price: $ {{ product.price.toFixed(2) }} </b-card-price>
        </b-card-body>

        <b-button v-b-modal.modal-scoped
          class="view-product-button"
          @click="$emit('view-product', product)"
          variant="primary"
          >By Product</b-button>

              <!-- <b-button class="mb-2" variant="primary" @click="$bvToast.show('view-product', product)">
      Show toast
    </b-button> -->
      
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
.card-item {
  margin: 1rem;
}
</style>


