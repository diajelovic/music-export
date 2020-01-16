<template>
  <form>
    <img class="logo" src="./images/deezer-logo.png" alt="" />
    <TextBox name="deezer_username" type="text" label="Username" />
    <TextBox name="deezer_password" type="password" label="Password" />
  </form>
</template>

<script>
import TextBox from 'components/TextBox';

export default {
  components: { TextBox },
};
</script>

<style scoped>
@import '~@material/textfield/mdc-text-field.scss';

.logo {
  width: 100px;
  height: 50px;
  display: block;
}
</style>
