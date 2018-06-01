<template>
  <div class="product-item">
    <a :href="data['header-top-right-url']" target="_blank">
      <img :src="data['product-image-url']"/>
      <h2>{{ data['product-name'] }}</h2>
      <p>{{ $t("message.type") }}: {{ data['header-top-left-text'] }}</p>
      <p>{{ $t("message.store") }}: {{ data['product-cta-text'] }}</p>
    </a>
    <button @click="addToCart(dataId)" :id="dataId">Add To Cart</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductItem from '@/components/ProductItem'

export default {
  props: ['data', 'dataId'],

  components: {
    ProductItem
  },

  name: 'Product',

  data: () => {
    return {
      index: ''
    }
  },

  computed: {
    ...mapState({
      dataProduct: 'dataProduct'
    })
  },

  methods: {
    ...mapActions(['callDataProduct', 'handleCart']),
    addToCart: function (id) {
      this.handleCart(id)
    }
  },

  beforeCreate () {
  },

  created () {
    this.callDataProduct()
  },

  beforeMount () {

  },

  mounted () {

    // this.$refs.selectEle.dispatchEvent(new Event('change'))

  },

  beforeDestroy () {

  },

  destroyed () {

  }
}
</script>

<style lang="scss">
  .product-item {
    width: 23%;
    float: left;
    border: 1px solid #ccc;
    margin-right: 30px;
    padding: 5px;
    box-sizing: border-box;
    margin-bottom: 30px;

    &:nth-child(4n) {
      margin-right: 0;
    }

    a {
      font-size: 13px;
      text-decoration: none;
      color: #000;
    }

    button {
      cursor: pointer
    }
  }
</style>
