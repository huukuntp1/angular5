<template>
  <div class="coin-row">
    <div class="coin-cell">{{ data.rank }} </div>
    <div class="coin-cell"><img :src="data.imageURL" /> {{ data.name }}</div>
    <div class="coin-cell">{{ data.symbol }}</div>
    <div class="coin-cell" :class="[ data.percent_change_1h < 0 ? activeClass : nonactiveClass ]">{{ data.percent_change_1h }} %</div>
    <div class="coin-cell" :class="[ data.percent_change_24h < 0 ? activeClass : nonactiveClass ]">{{ data.percent_change_24h }} %</div>
    <div class="coin-cell">{{ data.price_usd }}</div>
    <div class="coin-cell">{{ data.last_updated }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemCoin',

  props: ['data'],

  data: () => {
    return {
      activeClass: 'activeClass',
      nonactiveClass: 'nonactiveClass'
    }
  },

  watch: {
    'data' (n, o) {
      console.log(n)
    }
  },

  methods: {
    changeFilter () {

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
  .coin {
    &-tabel {
      margin-top: 25px;
      font-size: 17px;
      display: table;
      width: 100%;
      border: 1px solid #ccc;
    }

    &-row {
      display: table-row;
      border-bottom: 1px solid #ccc;

      &:first-child {
        background: #ff0000;
        color: #fff;
        font-weight: bold;
      }
    }

    &-cell {
      display: table-cell;
      padding: 10px 0;
      text-align: center;
      border-bottom: 1px solid #ccc;
      font-weight: bold;

      &.activeClass {
        color: #ff0000;
      }

      &.nonactiveClass {
        color: #13ba35;
      }

      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 5px
      }
    }
  }
</style>
