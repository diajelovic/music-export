<template>
  <div class="md-layout md-alignment-center">
    <div class="md-layout-item form">
      <Login />
    </div>
  </div>
</template>

<script>
import Login from './pages/deezer-login';

export default {
  components: { Login },
};
</script>

<style scoped>
  .form {
    max-width: 500px;
  }
</style>
