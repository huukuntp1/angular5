<template>
  <div class="product-item">
    {{ data }}
    <a :href="data.url" target="_blank">
      <img :src="data.urlToImage"/>
      <div class="description">
      <p class="titleNews">{{ data.title }}</p>
      <p>{{ data.description }}</p>
      <p>Date: {{ data.publishedAt }}</p></div>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['data'],

  components: {
  },

  name: 'Product',

  data: () => {
    return {
      index: '',
      classrow: 'classrow',
      classCol: 'classCol'
    }
  },

  computed: {
    ...mapState({
      dataProduct: 'dataProduct',
      isRow: 'isRow'
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
    &.classCol {
      width: 23%;
      float: left;
      border: 1px solid #ccc;
      margin-right: 30px;
      padding: 5px;
      box-sizing: border-box;
      min-height: 300px;
      margin-bottom: 30px;

      .titleNews {
        font-weight: bold;
        font-size: 15px;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:nth-child(4n + 1) {
        clear: both;
      }

      a {
        font-size: 13px;
        text-decoration: none;
        color: #000;
      }

      img {
        width: 275px;
        height: 150px;;
      }

      button {
        cursor: pointer
      }
    }
    &.classrow {
      width: 100%;
      float: left;
      border: 1px solid #ccc;
      margin-right: 30px;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 10px;

      .titleNews {
        font-weight: bold;
        font-size: 15px;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:nth-child(4n + 1) {
        clear: both;
      }

      a {
        font-size: 13px;
        text-decoration: none;
        color: #000;
      }

      img {
        width: 275px;
        height: 150px;
        float: left;
        vertical-align: middle;
      }

      .description {
        float: left;
        width: 920px;
        text-align: left;
        padding-left: 25px;
      }

      button {
        cursor: pointer
      }
    }
  }
</style>
