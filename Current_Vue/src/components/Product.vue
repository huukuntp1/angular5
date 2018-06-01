<template>
  <div class="secction-product">
    <h2>{{ $t("message.product") }}</h2>
    <div class="product-search">
      <input type="text" name="find" placeholder="find" v-model="find"/>
      {{ result }}
    </div>
    <div class="product-paging">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
    <div class="product-list">
      <ProductItem v-for="(itemList, index) in dataProduct" :key="index" :data="itemList" :dataId="index"/>
      <ProductItem v-for="(itemList, index) in dataProduct" :key="index" :data="itemList" :dataId="index"/>
      <ProductItem v-for="(itemList, index) in dataProduct" :key="index" :data="itemList" :dataId="index"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductItem from '@/components/ProductItem'

export default {
  components: {
    ProductItem
  },

  name: 'Product',

  data: () => {
    return {
      index: '',
      find: '',
      result: ''
    }
  },

  computed: {
    ...mapState({
      dataProduct: 'dataProduct'
    })
  },

  methods: {
    ...mapActions(['callDataProduct'])
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
  .product-list {
    overflow: hidden;
  }
  .product-search {
    text-align: left;
    margin-bottom: 20px;

    input {
      padding: 10px;
      text-transform: uppercase;
      width: 500px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  }
</style>
