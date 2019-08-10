<template>
  <transition name="fade">
    <div class="toast" v-show="shown">
      {{ message }}
    </div>
  </transition>
</template>

<script>
import EventBus from '../Bus';

export default {
  name: 'Toast',
  timeout: null,
  data() {
    return {
      message: '',
      shown: false,
      hide: true,
    };
  },
  mounted() {
    EventBus.$on('SHOW_TOAST', (message, time = 1500) => {
      this.message = message;
      this.shown = true;

      if (this.timeout !== null) clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.shown = false;
      }, time);
    });
  },
};
</script>

<style scoped lang="scss">
.toast {
  border-radius: $small-bradius;
  padding: $small-padding * 1.5;
  font-size: 1.5rem;
  background-color: $background-color;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $text-primary;
}

.fade-enter-active {
  transition: opacity 0.2s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
