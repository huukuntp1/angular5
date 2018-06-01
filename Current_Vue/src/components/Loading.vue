<template>
  <div class="secction-loading" :class="isLoading ? active : ''">
    <div class="wrapper-loading">{{ isLoading }}</div>
    <div class="loader"></div>
  </div>
</template>
<script>

import {mapState} from 'vuex'

export default {
  name: 'Form',
  data () {
    return {
      active: 'active'
    }
  },

  computed: {
    ...mapState({
      isLoading: 'isLoading'
    })
  },

  methods: {

  },

  mounted () {

  }

}
</script>

<style lang="scss">
.secction-loading {
    position: static;
    opacity: 0;
    visibility: hidden;

    .wrapper-loading {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      background: #000000;
      opacity: .5;
      left: 0;
      right: 0;
    }

    .loader {
      border: 5px solid #f3f3f3; /* Light grey */
      border-top: 5px solid #ff0000; /* Blue */
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 2s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
