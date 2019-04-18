<template>
  <v-card-title>
    <v-flex xs12>
      <h3>Enter access code</h3>
      <div>
        <v-text-field
          label="Access code"
          hint="Enter your 12-digit access code from your email"
          outline
          clearable
        ></v-text-field>
      </div>
    </v-flex>
    <v-layout class="button-holder">
      <v-btn large flat to="/auth/login">Sign in</v-btn>
      <v-btn large color="primary" to="/">Next</v-btn>
    </v-layout>
  </v-card-title>
</template>


<style lang="scss" scoped>

</style>
