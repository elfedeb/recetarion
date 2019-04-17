<template>
  <v-container fluid fill-height>
    <v-form>
      <v-container>
        <v-layout>
          <v-card class="login-box">
            <v-card-title primary-title>
              <v-flex xs12>
                <h3 primary-title>
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
            <hr>

            <v-container class="complementary-links">
              <a href="#!" title="Help">Help</a>
              <a href="#!" title="Privacy">Privacy</a>
              <a href="#!" title="Terms">Terms</a>
            </v-container>
          </v-card>
        </v-layout>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    languages: ["English", "Spanish"]
  })
};
</script>

<style lang="scss" scoped>
.login-box {
  max-width: 520px;
}

h3 {
  color: #172251;
  margin-bottom: 3vh;
  position: relative;
  a {
    top: 3px;
    position: relative;
    .v-icon {
      color: #172251;
      caret-color: #172251;
    }
  }
}
.v-form {
  margin: 3rem auto;
}

.v-card {
  padding: 1rem 1.6rem;
}

@media screen and (max-width: 600px) {
  .v-form,
  .v-card {
    margin: 0 auto;
  }
}
.button-holder {
  justify-content: flex-end;
  margin-top: 15vh;
}

.complementary-links {
  text-align: right;
  padding: 16px;
  font-weight: 600;
  a {
    &:first-of-type {
      margin-left: auto;
    }
    margin: 0 0 0 24px;
    &:not(:hover),
    &:not(:focus) {
      text-decoration: none;
    }
  }
}
</style>
