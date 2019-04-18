<template>
  <v-card-title>
    <v-flex xs12>
      <h3>Enter access code</h3>
      <div>
        <v-text-field
          v-model="name"
          v-validate="'required|max:10'"
          :counter="10"
          :error-messages="errors.collect('name')"
          label="Access code"
          data-vv-name="name"
          required
          outline
        ></v-text-field>
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          outline
          persistent-hint
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </div>
    </v-flex>
    <v-layout class="button-holder">
      <v-btn large flat to="/auth/login">Sign in</v-btn>
      <v-btn large color="primary" to="/">Next</v-btn>
    </v-layout>
  </v-card-title>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

const config = {
  classes: true
};

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },
  name: "flags-example",

  data: () => ({
    name: "",
    email: "",
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        name: {
          required: () => "You should get a 10-number code in your email",
          max: "Enter your 10-digit access code"
          // custom messages
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
      console.log(this.fields.email.valid);
    },
    clear() {
      this.name = "";
      this.$validator.reset();
    }
  }
};
</script>

<style lang="css">
.theme--light.v-text-field--outline.v-input--is-label-active:not(.error--text) > .v-input__control > .v-input__slot {
  border: 2px solid green;
}
</style>