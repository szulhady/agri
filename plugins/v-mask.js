import Vue from 'vue'

// Prefered: as a plugin (directive + filter) + custom placeholders support
import VueMask from 'v-mask'
Vue.use(VueMask, {   // (!) custom placeholders support requires registration as a plugin to
  placeholders: {
    '.': null,       // passing `null` removes default placeholder, so `#` is treated as character
    A: null,         // define new placeholder
    // D: /\d/,         // define new placeholder
    Я: /[\wа-яА-Я]/, // cyrillic letter as a placeholder
  }
})