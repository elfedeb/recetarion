<template>
  <v-card-title>
    <v-flex xs12>
      <h3>Sign in to SunStreet</h3>
      <div>
        <v-text-field outline label="Username" required></v-text-field>

        <v-text-field :type="'password'" outline label="Password" required></v-text-field>
      </div>
    </v-flex>

    <v-layout class="button-holder">
      <v-btn large color="primary" to="/auth/create-account">Next</v-btn>
    </v-layout>
  </v-card-title>
</template>