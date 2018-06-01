<template>
  <div id="app">
    <Cart />
    <Language />
    <Menu />
    <router-view />
    <Loading/>
  </div>
</template>

<script>
import Language from './components/Language'
import Loading from './components/Loading'
import Menu from './components/Menu'
import Cart from './components/Cart'

export default {
  components: {
    Language,
    Loading,
    Menu,
    Cart
  },

  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainTitle {
  text-transform: uppercase;
  font-size: 20px;
  display: inline-block;
  border-bottom: 1px solid;
  padding-bottom: 5px;
}
</style>
