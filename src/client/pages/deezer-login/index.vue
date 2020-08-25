<template>
  <form>
    <div class="md-layout md-alignment-center">
      <div class="md-layout-item logo">
        Not Authorized
      </div>
    </div>
  </form>
</template>

<script>
import qs from 'query-string';

export default {
  data() {
    const query = window.location.hash.substr(1);

    return {
      token: qs.parse(query).access_token,
      expires: 3600,
    };
  },
  mounted() {
    if (this.token) {
      window.opener.postMessage(
        { type: 'deezerLogin', token: this.token, expires: this.expires },
        window.location.origin
      );
      window.close();
    }
  },
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
