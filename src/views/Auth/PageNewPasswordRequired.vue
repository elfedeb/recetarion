<template>
  <v-layout>
    <v-form>
      <v-card>
        <v-card-title>
          <v-flex xs12>
            <h3>New Password Required</h3>
            <div>
              <v-text-field :type="'password'" outline label="New password" required v-model="password"></v-text-field>
              <v-text-field :type="'password'" outline label="Confirm password" required v-model="passwordConfirmed"></v-text-field>
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
  name: 'PageNewPasswordRequired',
  components: {
    FormFooter
  },
  mounted() {
    if (!this.$store.state.user) {
      alert('No user info');
      this.$router.push({ path: '/auth/login'});
    }
  },
  data() {
    return {
      password: null,
      passwordConfirmed: null
    }
  },
  methods: {
    async onSubmit() {
      if (this.password !== this.passwordConfirmed) {
        alert('Password does not match');
        return;
      }

      console.log('Changing password...');
      try {
        let user = await Auth.completeNewPassword(this.$store.state.user, this.password);
        this.$store.commit('setUser', user);
        console.log(this.$store.state.user);
        this.$router.push({path: '/home'});
      } catch(e) {
        console.log('Failed auth');
        console.log(e);
      }
    }
  }
}
</script>
<style lang=scss scoped>

</style>