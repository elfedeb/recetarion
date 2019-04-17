<template>
  <v-container fluid fill-height>
    <v-form>
      <v-container>
        <v-layout>
          <v-card class="login-box">
            <v-card-title primary-title>
              <v-flex xs12>
                <h3 primary-title class="m-0 primary-text">Enter access code</h3>
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
  mounted: function() {
    document.body.classList.add("login-page");
  },
  destroyed: function() {
    document.body.classList.remove("login-page");
  },
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
}
.v-form {
  margin: 3rem 0 3rem 5.4rem;
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
