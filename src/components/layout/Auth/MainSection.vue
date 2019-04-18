<template>
  <v-content class="section" role="main">
    <v-container fluid fill-height fill-width>
      <v-layout justify-center align-center>
        <v-flex fill-width>
          <v-container fluid fill-height class="login-box">
            <v-form>
              <v-container>
                <v-layout>
                  <v-card>
                    <slot></slot>

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
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script>
export default {
  name: "MainSection"
};
</script>

<style lang="scss" scoped>
.section {
  flex: 1 auto;
  padding: 0.7rem 0.5rem;
  display: flex;
  flex-flow: column wrap;
}
.login-box {
  width: 680px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  /deep/ .v-card__title {
    h3 {
      color: #172251;
      margin-bottom: 3vh;
      position: relative;
      margin-right: 0.5rem;
      a {
        top: 3px;
        position: relative;
        color: transparent;
        .v-icon {
          color: #172251;
          caret-color: #172251;
          position: relative;
          right: 0;
        }
        &:hover {
          .v-icon {
            transition: all 0.3s ease;
            color: #7f849f;
            caret-color: #7f849f;
            right: 10px;
          }
        }
      }
    }
  }
  /deep/ .button-holder {
    justify-content: flex-end;
    margin-top: 15vh;
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
