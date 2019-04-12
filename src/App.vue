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
  export default { name: 'App'}
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";
</style>
