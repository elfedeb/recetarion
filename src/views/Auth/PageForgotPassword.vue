<template>
  <v-layout>
    <v-form>
      <v-card>
        <v-card-title>
          <v-flex xs12>
            <h3>Reset Password</h3>
            <div>
              <v-text-field outline label="Username or email" required v-model="username"></v-text-field>
            </div>
          </v-flex>

          <v-layout class="button-holder">
            <v-btn large color="primary" v-on:click.prevent="onSubmit">Next</v-btn>
          </v-layout>
        </v-card-title>

        <hr>
        <FormFooter/>
      </v-card>
    </v-form>
  </v-layout>
</template>

<script>
import FormFooter from "@/components/FormFooter.vue";
import Auth from '@aws-amplify/auth';

export default {
  name: 'PageForgotPassword',
  components: {
    FormFooter
  },
  data() {
    return {
      username: null
    }
  },
  methods: {
    async onSubmit() {
      console.log('Resetting password...');
      try {
        let result = await Auth.forgotPassword(this.username);
        console.log(result);
        this.$router.push({path: '/auth/reset-password', query: { username: this.username }});
      } catch(e) {
        console.log('Failed to reset password');
        console.log(e);
      }
    }
  }
}
</script>
<style lang=scss scoped>

</style>