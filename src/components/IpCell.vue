<template>
  <div class="cell cell-short ip-cell" :data-clipboard-text="serverIp">
    Server ip - {{ serverIp }}
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
import EventBus from '../Bus';

export default {
  name: 'IpCell',
  data() {
    return {
      serverIp: 'play.teamferal.com',
    };
  },
  mounted() {
    const clipboard = new ClipboardJS('.ip-cell');

    clipboard.on('success', () => {
      EventBus.$emit('SHOW_TOAST', 'Ip copied!');
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ip-cell {
  grid-column: 1/4;
  width: 50%;
  justify-self: center;
  text-align: center;
  cursor: pointer;
  order: -2;
  line-height: 75px - 2 * $small-padding;

  @media screen and (max-width: $mobile-break) {
    width: auto;
  }
}
</style>
