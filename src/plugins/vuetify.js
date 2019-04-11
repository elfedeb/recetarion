import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/assets/stylus/variants.styl'



Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#182251',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})