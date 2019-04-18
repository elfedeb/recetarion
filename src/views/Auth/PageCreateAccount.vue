<template>
  <v-card-title>
    <v-flex xs12>
      <h3>
        <a href="/auth/login">
          <v-icon>arrow_back</v-icon>
        </a> Create your account
      </h3>
      <v-flex xs12>
        <v-text-field label="First name" required outline></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-text-field label="Last name" required outline></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-text-field label="E-mail" required outline></v-text-field>
      </v-flex>
    </v-flex>
    <v-layout class="button-holder">
      <v-btn large flat to="/auth/login">Save & Exit</v-btn>
      <v-btn large color="primary" to="/auth/access">Next</v-btn>
    </v-layout>
  </v-card-title>
</template>

<style lang="scss" scoped>
</style>
