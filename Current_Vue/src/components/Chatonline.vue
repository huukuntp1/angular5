<template>
  <div class="secction-chat">
    <h2>Chat online</h2>
    <div class="form-chat">
      <div class="user">
        <label>Huu 1:</label>
        <p> app chat </p>
      </div>
      <div class="user mainUser">
        <label>Huu Main:</label>
        <p> Huu main app chat </p>
      </div>
      <div class="user">
        <label>Huu 2:</label>
        <p> app chat </p>
      </div>
    </div>
    <div class="input-chat" v-if="sectionUsername">
      <input type="text" name="input" placeholder="Bạn cần nói gì....."/>
    </div>
    <div v-if="!sectionUsername" class="input-chat warning">Please login at page Home, Continute click to....
      <router-link to="/">{{ $t("message.home") }}</router-link>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Chatonline',

  computed: {
    ...mapState({sectionUsername: 'sectionUsername'})
  }
}
</script>
<style lang="scss">
.secction-chat {
  width: 400px;
  margin: auto;
  border: 1px solid #ccc;
  min-height: 500px;
  max-height: 500px;
  position: relative;

  h2 {
    text-transform: uppercase;
    color: #24c45c;
  }

  .form-chat {
    height: auto;
    overflow-y: auto;
  }

  .input-chat {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #24c45c;
    padding: 10px;

    input {
      width: 100%;
      padding: 10px 0;
      text-indent: 10px;
      border: 1px solid #24c45c;
    }
  }

  .user {
    text-align: left;
    margin: 10px 0;
    background: #5c6ad1;
    padding: 10px 20px;
    border-radius: 20px;
    color: #fff;

    label {
      border: 1px solid #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 10px;
      background: red;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }

    p {
      margin: 5px 0;
    }
  }

  .mainUser {
    background: #24c45c;
    text-align: right;
  }

  .form-chat {
    height: auto;
    overflow-y: auto;
    max-height: 330px;
    padding: 10px;
  }
  .form-chat::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px #24c45c;
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  .form-chat::-webkit-scrollbar
  {
    width: 12px;
    background-color: #F5F5F5;
  }

  .form-chat::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #24c45c;
    background-color: #24c45c;
  }

  .warning {
    color: #fff;
    font-size: 14px;
    a {
      color: #ff0000;
      font-weight: bold;
      font-size: 14px
    }
  }
}
</style>
