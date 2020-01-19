<template>
  <form>
    <img class="logo" src="./images/deezer-logo.png" alt="" />
    <TextBox name="deezer_username" type="text" label="Username" :onChange="changeNameHandler" />
    <TextBox name="deezer_password" type="password" label="Password" :onChange="changePassHandler"/>
    <div>Result: {{ result }}</div>
  </form>
</template>

<script>
import TextBox from 'components/TextBox';

export default {
  components: { TextBox },
  data() {
    return {
      name: '',
      password: '',
      changeNameHandler: (value) => {
        this.name = value;
      },
      changePassHandler: (value) => {
        this.password = value;
      }
    }
  },
  computed: {
    result() {
      return this.name.length * this.password.length
    }
  }
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
