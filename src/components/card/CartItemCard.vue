<template>
<div class="shoping-card">
 <b-card>
  <b-table-simple hover small caption-top responsive>
    <b-tbody>
      <b-tr>
        <b-th rowspan="3">{{product.name}}</b-th>
        <b-th>{{description}}</b-th>
        <!-- <b-th>{{product.quantity}}
        </b-th> -->
        <b-th class="button-container-cart">
            <b-button variant="success" class="remove" @click="removeFromCart()"> - </b-button>
            {{ product_total }}
            
            <b-button variant="success" class="add" @click="addToCart()"> + </b-button>
        </b-th>
        <b-th >$ {{item_cost.toFixed(2)}}</b-th>
        <b-td>
            <b-button variant="danger" class="delete-product-one" @click="deleteFromCart(product)">Delete</b-button>
        </b-td> 
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-td colspan="7" variant="secondary" class="text-right">
          <b>Total cost: {{item_cost.toFixed(2)}}</b>
        </b-td>
      </b-tr>
    </b-tfoot>
  </b-table-simple>
  </b-card>
</div>

</template>

<script>
export default {
    props: ['product'],

    methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
   
    deleteFromCart(product) {
      this.$store.commit('deleteFromCart', product);
    }
    

  },
    computed: {
        description() {
            return this.product.description.substring(0, 120)
        },
        item_cost() {
            return this.product.price*this.product.quantity
        },
        product_total() {
          return this.$store.getters.productQuantity(this.product);
  
    },
    }
}
</script>

<style lang="scss">
.shoping-card {
  margin: 1rem;
}

 .delete-product-one {
  vertical-align: middle !important;
  margin-top: 1rem;
  float:right;
}
.button-container-cart {
  float: right!important;

}

</style>



