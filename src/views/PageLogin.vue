<template>
  <v-container fluid fill-height>
    <v-form>
      <v-container>
        <v-layout>
          <v-card>
            <v-card-title primary-title>
              <v-flex xs12>
                <h3 primary-title class="m-0 primary-text">Sign in to SunStreet</h3>
                <div>
                  <v-text-field outline label="Username" required></v-text-field>

                  <v-text-field :type="'password'" outline label="Password" required></v-text-field>
                </div>
              </v-flex>

              <v-btn large color="primary">Sign in</v-btn>
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
.v-card {
  padding: 1rem 1.6rem;
  margin: 3rem 0 3rem 5.4rem;
  h3 {
    margin: 0 0 5.4rem;
    font-size: 1.43rem;
  }
}
.v-btn {
    margin: 15vh 0 0 auto;
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
