<template>
  <div class="secction-lang">
      <label>{{ $t("message.chooseLang") }}: </label>
      <select @change="handleChange">
        <option value="vi">Vi</option>
        <option value="en">En</option>
      </select>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Language',

  computed: {
    ...mapState({
      labelChooseLanguage: 'labelChooseLanguage'
    })
  },

  methods: {
    handleChange (evt) {
      this.$i18n.locale = evt.target.value
    }
  }
}
</script>

<style lang="scss">
  .secction-lang {
    text-align: right;
    display: block;

    select {
      width: 60px;
      padding: 5px;
      vertical-align: middle;
      text-transform: uppercase;
    }

    label {
      font-size: 13px;
      font-weight: 700;
    }
  }
</style>
