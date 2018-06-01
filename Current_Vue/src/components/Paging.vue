<template>
  <div class="product-paging">
    <input type="number" name="pagesizer" placeholder="pagesize" v-model="pagesizer" ref="refPageSize" class="pagesizer" required/>
    <ul>
      <li v-for="index in totalPage" :key="index" @click="setCurrentPage(index)">{{ index }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Paging',

  data () {
    return {
      pagesizer: ''
    }
  },

  watch: {
    pagesizer (newVal, olVal) {
      if (newVal === '') {
        newVal = 4
      }
      this.pagesizeInput(newVal)
    }
  },

  computed: {
    ...mapState(['currPageIndex']),
    ...mapGetters(['totalPage'])
  },

  methods: {
    ...mapActions(['setCurrentPage', 'pagesizeInput'])
  }
}
</script>
<style lang="scss" scoped>
  .pagesizer {
    display: block;
    margin-bottom: 20px;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
</style>


