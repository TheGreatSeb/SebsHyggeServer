const apiURL = 'http://play.teamferal.com:3050';

Vue.use(vueMoment);

const app = new Vue({
  el: '#app',
  data: {
    serverIp: 'play.teamferal.com',
    status: {},
    players: [],
    lastOnline: [],
    toast: {
      hidden: true,
      message: '',
    },
    page: 'home'
  },
  mounted() {
    this.initCopyServerIp();

    this.getStatus();
    this.getPlayers();
    this.getLastOnline();

    setInterval(this.getStatus, 1000);
    setInterval(this.getPlayers, 1000);
    setInterval(this.getLastOnline, 1000);
  },
  methods: {
    getStatus() {
      fetch(`${apiURL}/status`)
        .then(response => {
          return response.json();
        }).then(json => {
          this.status = json;
        }).catch(err => {
          this.status.online = false;
        });
    },
    getPlayers() {
      fetch(`${apiURL}/players`)
        .then(response => {
          return response.json();
        }).then(json => {
          this.players = json;
        }).catch(err => {
          this.status.online = false;
        });
    },
    getLastOnline() {
      fetch(`${apiURL}/lastonline`)
        .then(response => {
          return response.json();
        }).then(json => {
          this.lastOnline = json;
        }).catch(err => {
          this.status.online = false;
        });
    },
    getUptime() {
      const duration = Date.now() - this.status.startTime;
      let hours = Math.floor(duration / (1000 * 60 * 60));
      let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((duration % (1000 * 60)) / 1000);
      return `${hours}h, ${minutes}m, ${seconds}s`;
    },
    hexToRgb(hex) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ] : null;
    },
    rgbToHex(rgb) {
      return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    },
    lerpColor(a, b, amount) {
      amount = Math.max(0, Math.min(amount, 1));
      let result = a.slice();
      for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + amount * (b[i] - a[i]));
      }
      return result;
    },
    displayToast(message, time = 1500) {
      this.toast.hidden = false;
      this.toast.message = message;
      setTimeout(() => {
        this.toast.hidden = true;
      }, time);
    },
    initCopyServerIp() {
      const clipboard = new ClipboardJS('.ip-cell');

      clipboard.on('success', () => {
        this.displayToast('Server ip copied!');
      });
    },
    closePage() {
      this.page = 'home';
    },
  },
});