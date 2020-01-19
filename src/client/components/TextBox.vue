<template>
  <div class="mdc-text-field">
    <input
      ref="textbox"
      :type="type"
      class="mdc-text-field__input"
      :id="name"
      :name="name"
      :autocomplete="name"
      v-model="value"
    />
    <label class="mdc-floating-label" :for="name">{{ label }}</label>
    <div class="mdc-line-ripple"></div>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield';

export default {
  props: ['type', 'name', 'label', 'onChange'],
  mounted() {
    new MDCTextField(this.$el);
  },
  data() {
    return {value: ''}
  },
  watch: {
    value(newValue) {
      this.onChange(newValue)
    }
  }
};
</script>

<style>
@import '~@material/textfield/mdc-text-field.scss';
</style>
