<template>
  <div class="cell server-status-cell">
    <h2>Server status</h2>
    <p>
      Online: <span :class="status.online ? 'text-green' : 'text-gold'">
        {{ this.status.online ? 'yes' : 'no' }}
      </span> <br>
      Paper version: {{ status.paperVersion }} <br>
      Minecraft version: {{ status.minecraftVersion }} <br>
      Players online: {{ status.players }} <br>
      Uptime: {{ uptime }} <br>
      TPS: <span v-for="(tps, index) in status.tps" :key="index">
        {{ index !== 0 ? ' / ' : '' }}
        <span :style="`color: ${percentColor(tps/20)}`">{{ tps.toFixed(2) }}</span>
      </span> <br>
      Weather: {{ status.weather }} <br>
      Time: {{ minecraftTime }} ({{ status.totalDays }} days) <br>
      CPU usage: <span :style="`color: ${percentColor(1-status.cpuUsage)};`">{{ (status.cpuUsage * 100).toFixed(2) }}%</span> <br>
      Memory: <span :style="`color: ${percentColor(status.memoryFree/status.memoryMax)};`">{{ (memoryUsed / BYTES_PER_GIGABYTE).toFixed(2) }}G</span>/{{ (status.memoryMax / BYTES_PER_GIGABYTE).toFixed(2) }}G
    </p>
  </div>
</template>

<script>
import {
  hexToRgb, rgbToHex, lerpColor, doubleDigit,
} from '../helpers';

export default {
  name: 'ServerStatusCell',
  data() {
    return {
      BYTES_PER_GIGABYTE: 1073741824,
    };
  },
  computed: {
    status() {
      return this.$store.state.status;
    },
    uptime() {
      const duration = Date.now() - this.status.startTime;
      const hours = Math.floor(duration / (1000 * 60 * 60));
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);
      return `${hours}h, ${minutes}m, ${seconds}s`;
    },
    minecraftTime() {
      const hours = doubleDigit((Math.floor(this.status.timeOfDay / 1000) + 6) % 24);
      const minutes = doubleDigit(Math.floor((this.status.timeOfDay % 1000) / 1000 * 60));
      return `${hours}:${minutes}`;
    },
    memoryUsed() {
      return this.status.memoryMax - this.status.memoryFree;
    },
  },
  methods: {
    percentColor(percentage) {
      const red = hexToRgb('FF5555');
      const green = hexToRgb('7EFF69');
      return rgbToHex(lerpColor(red, green, percentage));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
