<template>
  <v-layout>
    <v-form>
      <v-card>
        <v-card-title>
          <v-flex xs12>
            <h3>Reset Password for {{ username }}</h3>
            <div>
              <v-text-field outline label="Reset code" required v-model="resetCode"></v-text-field>
              <v-text-field :type="'password'" outline label="New Password" required v-model="password"></v-text-field>
              <v-text-field :type="'password'" outline label="Confirm Password" required v-model="confirmPassword"></v-text-field>
            </div>
          </v-flex>
          <v-layout class='button-holder'>
            <v-btn large color="primary" v-on:click.prevent="onCancel">Cancel</v-btn>
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
  name: 'PageForgotPasswordSubmit',
  components: {
    FormFooter
  },
  data() {
    return {
      username: null,
      resetCode: null,
      password: null,
      confirmPassword: null
    }
  },
  mounted() {
    if (!this.$route.query.username) this.$router.push({ path: '/auth/forgot-passsword' });
    this.username = this.$route.query.username;
  },
  methods: {
    onCancel() {
      this.$router.push({ path: '/auth' });
    },
    async onSubmit() {
      console.log('Submitting new password...');
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
      }

      try {
        let result = await Auth.forgotPasswordSubmit(this.username, this.resetCode, this.password);
        console.log(result);
        this.$router.push({path: '/auth'});
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