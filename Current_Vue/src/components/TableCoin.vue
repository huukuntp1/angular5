<template>
  <div class="coin-tabel">
    <div class="coin-row">
      <div class="coin-cell">{{ $t("message.numberorderCoin") }}</div>
      <div class="coin-cell">{{ $t("message.nameCoin") }}</div>
      <div class="coin-cell">{{ $t("message.symbolCoin") }}</div>
      <div class="coin-cell">{{ $t("message.time1h") }}</div>
      <div class="coin-cell">{{ $t("message.time24h") }}</div>
      <div class="coin-cell">{{ $t("message.text7D") }}</div>
      <div class="coin-cell">{{ $t("message.market") }}</div>
    </div>
    <div class="coin-row" v-for="(item,index) in dataApi" :key="index">
      <div class="coin-cell">{{ item.rank }} </div>
      <div class="coin-cell"><img :src="item.imageURL" /> {{ item.name }}</div>
      <div class="coin-cell">{{ item.symbol }}</div>
      <div class="coin-cell" :class="[ item.percent_change_1h < 0 ? activeClass : nonactiveClass ]">{{ item.percent_change_1h }} %</div>
      <div class="coin-cell" :class="[ item.percent_change_24h < 0 ? activeClass : nonactiveClass ]">{{ item.percent_change_24h }} %</div>
      <div class="coin-cell">{{ item.price_usd }}</div>
      <div class="coin-cell">{{ item.last_updated }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TableCoin',

  data: () => {
    return {
      activeClass: 'activeClass',
      nonactiveClass: 'nonactiveClass'
    }
  },

  computed: {
    ...mapState({
      dataApi: 'dataApi'
    })
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
