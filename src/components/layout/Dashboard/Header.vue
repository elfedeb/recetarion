<template>
    <v-toolbar app fixed clipped-left class="main-header">
      <v-toolbar-side-icon dark @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ this.$route.meta.pageTitle || '' }}</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn icon dark>
        <v-icon>notifications_none</v-icon>
      </v-btn>

      <v-toolbar-items>
        <v-btn flat dark :to="{ name: 'signout' }">Sign out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: "Header",
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
  background: #182251;
  color: #fff;
}
.title {
  font-weight: 600;
  letter-spacing: -0.065rem !important;
}
</style>
