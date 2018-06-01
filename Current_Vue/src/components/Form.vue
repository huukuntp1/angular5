<template>
  <div class="secction-form">
    <h1>{{ $t("message.titleForm") }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label> {{ $t("message.textUser") }} </label>
        <input type="text" name="username" ref="username" v-model="username" required rel="username"/>
      </div>
      <div class="form-group">
        <label> {{ $t("message.textPassword") }}</label>
        <input type="password" name="password" v-model="password" required/>
      </div>
      <div class="form-group">
        <button type="submit">{{ $t("message.textLogin") }}</button>
      </div>
     </form>
  </div>
</template>
<script>

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Form',
  data () {
    return {
      username: '',
      password: ''
    }
  },

  computed: {
    // message: function () {
    //   return this.$store.state.message
    // }
    ...mapState({
      message: 'message',
      labelUsername: 'labelUsername',
      labelPassword: 'labelPassword'
    }),
    // doneItems: function () {
    //   return this.$store.getters.doneItems
    // }
    ...mapGetters(['doneItems'])
  },

  methods: {
    ...mapActions(['loginForm', 'callAPI']),

    handleSubmit () {
      const username = this.$refs.username.value
      this.loginForm(username)
      this.callAPI()
      this.$router.push('/trand')
    },

    handlerCurrent () {
      this.callAPI()
    }
  },

  mounted () {
    console.log(this.data)
  }

}
</script>

<style lang="scss">
  .secction-form {
    width: 400px;
    margin: auto;
    background: #24c45c;
    padding: 15px 30px;
    box-sizing: border-box;

    .form-group {
      margin-bottom: 15px;

      label {
        font-size: 13px;
        font-weight: 700;
        display: block;
        text-align: left;
        margin-bottom: 5px;
      }

      input {
        border: none;
        width: 100%;
        height: 40px;
        text-indent: 15px;
        border-radius: 5px;
        outline: none;

        &:hover {
          box-shadow: 1px 1px 1px #ff0000;
        }
        &:focus {
          outline: none;
          box-shadow: 1px 1px 1px #ff0000;
        }
      }

      button {
        border: none;
        width: 100px;
        padding: 15px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
</style>
