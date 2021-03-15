<template>
  <div class="card-item">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image-item"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2">
      <b-card-title>{{ product.name }}</b-card-title>

      <b-card-body>
        <b-card-text>{{ description }}</b-card-text>
        <b-card-price> Price: $ {{ product.price.toFixed(2) }} </b-card-price>
      </b-card-body>

      <b-button
        class="view-product-button"
        @click="$emit('view-product', product)"
        variant="primary">By Product</b-button>
    </b-card>
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


