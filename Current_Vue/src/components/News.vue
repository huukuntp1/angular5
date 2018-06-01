<template>
  <div class="secction-product">
    <h2>{{ $t("message.news") }}</h2>
    <div class="product-search">
      <input type="text" name="find" placeholder="find" v-model="result"/>
    </div>
    <Paging></Paging>
    <div class="news-view">
      <button @click="checkView(true)">View - X</button>
      <button @click="checkView(false)">View - Y</button>
    </div>
    <div class="product-list">
      <NewsItem v-for="(itemList, index) in getPageNews" :key="index" :data="itemList" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import NewsItem from '@/components/NewsItem'
import Paging from '@/components/Paging'

export default {
  components: {
    NewsItem,
    Paging
  },

  name: 'News',

  data: () => {
    return {
      index: '',
      find: '',
      result: '',
      abc: ''
    }
  },

  watch: {
    result (newVal, olVal) {
      this.searchNews(newVal)
    }
  },

  computed: {
    ...mapState({
      arrNews: 'arrNews',
      keyWord: 'keyWord'
    }),

    ...mapGetters(['getPageNews'])
  },

  methods: {
    ...mapActions(['callDataNews', 'searchNews', 'setIsRow']),
    checkView: function (isRow) {
      this.setIsRow(isRow)
    }
  },

  beforeCreate () {
  },

  created () {
    this.callDataNews()
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
  .news-view {
    text-align: left;
    margin-bottom: 20px;
  }
  .product-search {
    text-align: left;

    input {
      padding: 10px;
      width: 500px;
      border-radius: 5px;
      border: 1px solid #ccc;

      &:focus {
        outline: none;
      }
    }
  }
  .product-paging {
    text-align: left;
    margin: 20px 0;

    ul {
      margin: 0;
      padding: 0;
      display: block;
      overflow: hidden;

      li {
        list-style: none;
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-align: center;
        border-right: none;
        float: left;
        cursor: pointer;
        font-weight: bold;

        &:hover {
          background: #ff0000;
          color: #ff0;
        }

        &:last-child {
          border-right: 1px solid #ccc;
        }
      }
    }
  }
</style>
