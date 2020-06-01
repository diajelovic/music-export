<template>
  <form>
    <div class="md-layout md-alignment-center">
      <div class="md-layout-item logo">
        <img src="./images/deezer-logo.png" alt="" />
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label>Login</label>
          <md-input v-model="name" />
        </md-field>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label>Password</label>
          <md-input v-model="password"/>
        </md-field>
      </div>
    </div>
    <div>Result: {{ result }}</div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      password: '',
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
.logo {
  max-width: 100px;
}

.logo img {
  height: 50px;
  display: block;
}
</style>
