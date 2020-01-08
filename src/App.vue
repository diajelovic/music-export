<template>
    <form>
        <div class="mdc-text-field username">
            <input type="text" class="mdc-text-field__input" id="username-input" name="deezer_username">
            <label class="mdc-floating-label" for="username-input">Username</label>
            <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field password">
            <input type="password" class="mdc-text-field__input" id="password-input" name="deezer_password">
            <label class="mdc-floating-label" for="password-input">Password</label>
            <div class="mdc-line-ripple"></div>
        </div>
    </form>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style module>
    @import "~@material/textfield/mdc-text-field.scss";
</style>
