<template>
  <div>
    <ProfileItem v-for="service in state.services" :key="service.name" :service="service" />
  </div>
</template>

<script>
import { ViewModel } from 'pages/auth/auth.model';
import ProfileItem from './profile.item';

export default {
  components: {
    ProfileItem,
  },
  data() {
    return {
      state: new ViewModel(),
    };
  },
  mounted() {
    if (!this.state.loginnedServices) {
      this.$router.push('/');
    }
  },
};
</script>
