<template>
  <div>
    <div class="buttons">
      <md-button class="md-raised md-primary" v-if="selected.length" @click="deselectAll"
        >Deselect ({{ selected.length }})</md-button
      >
      <md-button class="md-raised md-primary" v-else @click="selectAll">Select All</md-button>
    </div>
    <md-list
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <md-list-item v-for="song in service.store.songs" :key="song.id">
        <md-checkbox v-model="selected" :value="song.name" />
        <span class="md-list-item-text">{{ song.name }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { observer } from 'mobx-vue';

export default observer({
  props: ['service'],
  data() {
    return {
      selected: [],
      loading: false,
    };
  },
  mounted() {
    this.$props.service.store.fetchUserSongs();
  },
  methods: {
    selectAll: function () {
      this.selected = this.$props.service.store.songs.map(song => song.name);
    },
    deselectAll: function () {
      this.selected = [];
    },
    loadMore: function () {
      this.$props.service.store.fetchNextPage();
    },
  },
});
</script>

<style>
.buttons {
  margin: 10px 0;
}
</style>
