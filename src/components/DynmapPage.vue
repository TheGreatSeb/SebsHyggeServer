<template>
  <div class="page dynmap-page">
    <h2>Dynmap</h2>
    <div class="page-close" @click="close"><close-icon/></div>
    <div class="content">
      <iframe class="dynmap-frame" src="http://play.teamferal.com:8124" frameborder="0" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close';

export default {
  name: 'DynmapPage',
  components: { CloseIcon },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  box-shadow: $small-shadow;

  .dynmap-frame {
    border-radius: $small-bradius;
  }
}
</style>
