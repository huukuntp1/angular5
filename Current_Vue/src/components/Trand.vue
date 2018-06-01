<template>
  <div class="trand">
    <h2 class="trand-title" v-if="sectionUsername">
      {{ $t("message.welcome") }}: <span> {{ sectionUsername }} </span>
      <router-link to="/">{{ $t("message.logout") }}</router-link>
    </h2>
    <h2>{{ $t("message.titleCoins") }}</h2>
    <div class="filter">
      <label>{{ $t("message.filter") }} :</label>
      <select @change="changeFilter" ref="selectEle">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="80">80</option>
        <option value="100">100</option>
      </select>
    </div>
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
      <ItemCoin
        v-for="(item, index) in dataApiTest"
        :key="index"
        :data="item"
        />
    </div>
    <!-- <TableCoin></TableCoin> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableCoin from '@/components/TableCoin'
import ItemCoin from '@/components/ItemCoin'

export default {
  components: {
    TableCoin,
    ItemCoin
  },

  name: 'trand',

  data: () => {
    return {
      index: ''
    }
  },

  computed: {
    ...mapState({
      sectionUsername: 'sectionUsername',
      // dataApi: 'dataApi'
      dataApi: 'dataApi'
    }),

    dataApiTest: function () {
      return this.dataApi
    }
    // ...mapGetters(['dataApiTest'])
    // ...mapGetters(['dataApi'])
  },

  methods: {
    ...mapActions(['callAPI']),
    changeFilter (evt) {
      const val = evt.target.value
      this.callAPI(val)
    }
  },

  beforeCreate () {

  },

  beforeMount () {

  },

  mounted () {
    this.$refs.selectEle.dispatchEvent(new Event('change'))
  },

  beforeDestroy () {

  },

  destroyed () {

  }
}
</script>

<style lang="scss">
  .trand {

    &-title {
      text-align: left;
      padding-left: 15px;
      font-size: 15px;

      span {
        color: #ff0000;
        font-weight: bold;
        text-transform: uppercase;
      }

      a {
        color: blue;
        text-decoration: none;
        display: inline-block;
      }
    }

    .filter {
      text-align: left;
      padding-left: 15px;
      font-size: 14px;
    }

    .coin {

      &-tabel {
        margin-top: 25px;
        font-size: 17px;
        display: table;
        width: 100%
      }

      &-row {
        display: table-row;

        &:first-child {
          background: #24c45c;
          color: #fff;
          font-weight: bold;
        }
      }

      &-cell {
        display: table-cell;
        padding: 10px 0;
        text-align: center;
      }
    }
  }
</style>
