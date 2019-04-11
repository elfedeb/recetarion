<template>
  <v-app>
    <v-content>
      <!-- <div id="temp-template-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/customer-portal">Customer Portal</router-link>
    </div> -->
    <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";
</style>
