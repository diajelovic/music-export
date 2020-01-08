<template>
    <div class="mdc-text-field">
        <input :type="type" class="mdc-text-field__input" :id="name" :name="name"/>
        <label class="mdc-floating-label" :for="name">Username</label>
        <div class="mdc-line-ripple"></div>
    </div>
</template>

<script>
  import {MDCTextField} from '@material/textfield';

  export default {
    props: [
      'type',
      'name'
    ],
    mounted () {
      new MDCTextField(el);
    }
  }
</script>

<style module>
    @import "~@material/textfield/mdc-text-field.scss";
</style>
