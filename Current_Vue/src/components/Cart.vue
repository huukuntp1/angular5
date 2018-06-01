<template>
  <div class="secction-cart" :class="[ isShowCart === true ? active : '' ]">
    <button @click="closeCart">x</button>
    <div class="cart-item" v-for="(item, key) in arrayCart" :key="key">
      <img :src="dataProduct[item]['product-image-url']"/>
      <p>{{ dataProduct[item]['product-name'] }}</p>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {

  },

  name: 'Cart',

  data: () => {
    return {
      active: 'active'
    }
  },

  computed: {
    ...mapState({
      isShowCart: 'isShowCart',
      dataProduct: 'dataProduct',
      arrayCart: 'arrayCart'
    })
  },

  methods: {
    ...mapActions(['handleShowCart']),
    closeCart: function () {
      this.handleShowCart(false)
    }
  },

  beforeCreate () {
  },

  created () {

  },

  beforeMount () {

  },

  mounted () {

  },

  beforeDestroy () {

  },

  destroyed () {

  }
}
</script>

<style lang="scss">
  .secction-cart {
    position: fixed;
    min-height: 100px;
    background: #f3f0f0;
    width: 0;
    right: 0;
    border: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    top: 20%;
    transition: 1s;

    button {
      float: left;
      cursor: pointer;
      border: none;

      &:hover {
        background: #ff0000;
        color: #fff;
      }
    }

    &.active {
      width: 500px;
    }
    .cart-item {
      text-align: left;
      width: 500px;
      border-bottom: 1px solid #ccc;
      padding: 15px 0;
      overflow: hidden;

      img {
        width: 150px;
        vertical-align: middle;
        display: inline;
        margin-right: 15px;
        float: left;
      }

      p {
        font-size: 13px;
        float: right;
        width: 320px;
        vertical-align: middle;
      }
    }
  }
</style>
