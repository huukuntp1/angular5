<template>
  <div class="secction-product">
    <h2>Intranet</h2>
    <div class="filterName">
      <label>Filter name: </label>
      <input type="text" placeholder="Filter name"/>
    </div>
    <div class="intranet_list">
      <ul>
        <li
          v-for="(item, key) in arrIntranet"
          :key="key" @click="listPerson(item['@team_id'])"
          rel="triggerClick">
          {{ item.n }}
        </li>
      </ul>
    </div>
    <div class="list_member">
      <div v-for="(item, key) in arrMember" :key="item.id" class="item_member">
        <img :src="urlImg + item.img"/>
        <h2>{{ item.name }}</h2>
        <ul>
          <li> ( {{ item.position }} )</li>
          <li>( {{ item.id }} )</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import itemIntranet from '@/components/itemIntranet'
import Paging from '@/components/Paging'

export default {
  components: {
    itemIntranet,
    Paging
  },

  name: 'News',

  data: () => {
    return {
      index: '',
      find: '',
      result: '',
      abc: '',
      urlImg: 'http://company.org.sutrix.com',
      test: ''
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
      keyWord: 'keyWord',
      arrIntranet: 'arrIntranet',
      arrMember: 'arrMember'
    }),

    ...mapGetters(['getPageNews'])
  },

  methods: {
    ...mapActions(['callDataIntranet', 'searchNews', 'setIsRow', 'filterTeam']),
    checkView: function (isRow) {
      this.setIsRow(isRow)
    },

    listPerson: function (id) {
      console.log(id)
      this.filterTeam(id)
    }
  },

  beforeCreate () {

  },

  created () {
    var dataOld = localStorage.getItem('arrIntranet')
    this.callDataIntranet(dataOld)
  },

  beforeMount () {

  },

  mounted () {
    this.$refs.triggerClick[0].dispatchEvent(new Event('click'))
  },

  beforeDestroy () {
    window.localStorage.setItem('arrIntranet', JSON.stringify(this.arrIntranet))
  },

  destroyed () {

  }
}
</script>

<style lang="scss">
.intranet_list {
   ul {
    display: block;
    background: #24c45c;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    li {
      display: inline-block;
      padding: 15px 6px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
.list_member {
  overflow: hidden;
  text-align: center;


  .item_member {
    padding: 5px;
    box-sizing: border-box;
    float: left;
    border: 1px solid #ccc;
    width: 19.2%;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    animation: popin-open .5s ease forwards;
    background: #e76f12;
    color: #fff;
    min-height: 250px;

    h2 {
      margin-top: 10px;
    }

    ul {
      display: block;
      padding: 0;

      li {
        padding: 2px 0;
      }
    }
  }
}
@keyframes popin-open {
    0% {
      opacity: 0;
      transform: scale(.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

</style>
