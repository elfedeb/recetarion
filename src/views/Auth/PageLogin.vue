<template>
  <v-layout>
    <v-form class="login-form">
      <v-card>
        <v-card-title>
          <v-flex xs12>
            <h3>Sign in to SunStreet</h3>
            <div>
              <v-text-field outline label="Username" required v-model="username"></v-text-field>

              <v-text-field :type="'password'" outline label="Password" required v-model="password"></v-text-field>
              <router-link :to="{ path: '/auth/forgot-password' }">Forgot password</router-link>
            </div>
          </v-flex>

          <v-layout class="button-holder">
            <v-btn large color="primary" v-on:click.prevent="onSubmit">Next</v-btn>
          </v-layout>
        </v-card-title>

        <hr class="hr-divider">
        <FormFooter/>
      </v-card>
    </v-form>
  </v-layout>
</template>

<script>
  import FormFooter from "@/components/FormFooter.vue";
  import Auth from '@aws-amplify/auth';

  export default {
    name: 'PageLogin',
    components: {
      FormFooter
    },
    data() {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      async onSubmit() {
        console.log('Logging in...');
        try {
          let user = await Auth.signIn(this.username, this.password);
          this.$store.commit('setUser', user);
          console.log(this.$store.state.user);
          if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            console.log('This requires a new password');
            this.$router.push({path: '/auth/new-password-required'});
          } else {
            this.$router.push({path: '/home'});
          }
        } catch(e) {
          console.log('Failed auth');
          console.log(e);
          this.$notify({ group: 'app', type: 'error', text: e.message, duration: 3000 });
        }
      }
    }
  }
</script>

<style lang=scss scoped>
  .v-form.login-form {
    margin-left: 80px;
    .hr-divider {
      width: calc(100% + 43px);
      margin-left: -22px;
  }
  }
</style>