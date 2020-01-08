<template>
    <form>
        <TextBox name="deezer_username" type="text"/>
        <TextBox name="deezer_password" type="password"/>
    </form>
</template>

<script>
  import TextBox from "../components/TextBox";

  export default {
    components: { TextBox },
  }
</script>

<style module>
    @import "~@material/textfield/mdc-text-field.scss";
</style>
