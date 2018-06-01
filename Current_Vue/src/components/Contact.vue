<template>
  <div class="secction-contact">
    <h2>{{ $t("message.contact") }}</h2>
    <div class="wrapper-contact">
      <div class="wrapper-contact-item">
        <p>{{ $t("message.nameContact") }} : {{ nameContact}}</p>
        <p>{{ $t("message.phoneContact") }} : {{ phoneContact}}</p>
        <p>{{ $t("message.addressContact") }} : {{ addressContact}}</p>
        <p>{{ $t("message.contentContact") }} : {{ contentContact}}</p>
      </div>
      <div class="wrapper-contact-item">
        <div v-for="(item, key) in listError" v-if="isShow" :key="key" class="listError">
          <span>{{ item }}</span>
        </div>
        <form action="" method="" @submit.prevent="checkForm">
          <div class="form-group">
            <label>{{ $t("message.nameContact") }}</label>
            <input type="text" name="name" v-model="name" placeholder="Name"/>
          </div>
          <div class="form-group">
            <label>{{ $t("message.phoneContact") }}</label>
            <input type="text" name="phone" v-model="phone" placeholder="phone"/>
          </div>
          <div class="form-group">
            <label>{{ $t("message.addressContact") }}</label>
            <input type="text" name="address" v-model="address" placeholder="address"/>
          </div>
          <div class="form-group">
            <label>{{ $t("message.contentContact") }}</label>
            <textarea name="content" id="" v-model="content" cols="30" rows="10"></textarea>
          </div>
          <div class="form-group">
            <button>{{ $t("message.sendContact") }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data: () => {
    return {
      nameContact: 'Lê Thanh Hữu',
      phoneContact: '01636360914',
      addressContact: '47/3B ấp 3, xã xuân thới  thượng, huyện hóc môn, TP HCM',
      contentContact: 'Hãy bắt đầu làm những việc cần thiết, sau đó làm những việc bạn có thể, và tự nhiên bạn có thể làm những điều không thể',
      name: null,
      phone: null,
      address: null,
      listError: [],
      isShow: false,
      content: ''
    }
  },

  computed: {

  },

  methods: {
    checkForm: function () {
      if (this.name && this.address && this.phone) {
        this.isShow = false
        this.listError.empty()
        return true
      }
      if (!this.name) {
        this.listError.push('Please fill name')
        this.isShow = true
      }
      if (!this.address) {
        this.listError.push('Please fill address')
        this.isShow = true
      }
      if (!this.phone) {
        this.listError.push('Please fill phone')
        this.isShow = true
      }
    }
  },

  beforeCreate () {

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
  .wrapper-contact {
    overflow: hidden;

    &-item {
      float: left;
      width: 50%;
      text-align: left;
      padding: 0 15px;
      box-sizing: border-box;

      p {
        margin: 15px 0;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
      }

      label {
        vertical-align: middle;
        display: block;
        margin: 10px 0;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: bold;
      }

      input {
        display: block;
        width: 100%;
        text-indent: 10px;
        padding: 15px 0;
        font-size: 13px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      textarea {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
        text-indent: 10px;
      }

      button {
        margin-top: 15px;
        width: 145px;
        font-size: 13px;
        padding: 15px;
      }
    }
  }
</style>
