<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text title">Home</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>notifications_none</v-icon>
    </v-btn>

    <v-toolbar-items>
      <v-btn flat>Sign out</v-btn>
    </v-toolbar-items>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style lang="scss" scoped>
  .title {
    font-weight: 600;
    letter-spacing: -0.065rem !important;
  }
</style>
