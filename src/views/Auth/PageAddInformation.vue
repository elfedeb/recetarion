<template>
  <v-card-title>
    <v-flex xs12>
      <h3>
        <a href="/auth/login">
          <v-icon>arrow_back</v-icon>
        </a> Add your information
      </h3>

      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="First name" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="Last name" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="Birthday" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="Phone" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="Address" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="City" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-text-field label="County" required outline></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 sm6>
            <v-layout row wrap>
              <v-flex sm5>
                <v-text-field label="State" required outline></v-text-field>
              </v-flex>
              <v-flex sm7>
                <v-text-field label="Zip code" required outline></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-layout class="button-holder">
      <v-btn large flat to="/auth/login">Save & Exit</v-btn>
      <v-btn large color="primary" to="/auth/access">Next</v-btn>
    </v-layout>
  </v-card-title>
</template>

<style lang="scss" scoped>
</style>
