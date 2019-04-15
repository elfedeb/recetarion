<template>
  <div class="flex xs12">
    <v-stepper v-model="pageActivation" vertical>
      <v-stepper-step :complete="true" step="1" @click="pageActivation = 1">
        Welcome
        <small>You're really close to your dreams</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>

      <v-stepper-step :complete="true" step="2" @click="pageActivation = 2">Pre-closing</v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>

      <v-stepper-step :complete="false" step="3" @click="pageActivation = 3">Permission to operate</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>

      <v-stepper-step :complete="false" step="4" @click="pageActivation = 4">Activation</v-stepper-step>

      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "BaseStepper",
  data() {
    return {
      // opens third page
      pageActivation: 3
    };
  }
};
</script>