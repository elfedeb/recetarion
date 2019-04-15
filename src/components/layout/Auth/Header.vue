<template>
    <v-toolbar app light fixed clipped-left class="main-header">
      <v-toolbar-title>Sunstreet</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat>Pay bill</v-btn>
        <v-btn flat to="/home">Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: "LoginHeader",
  methods: {
    toggleDrawer() {
      console.log(this.$store.state.menu);
      this.$store.commit('toggleMenu');
    }
  }
};
</script>

<style lang="scss" scoped>
.main-header {
}
.title {
  font-weight: 600;
  letter-spacing: -0.065rem !important;
}
</style>
