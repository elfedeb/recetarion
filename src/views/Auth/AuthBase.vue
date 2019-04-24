<template>
  <v-app class="application--wrap">
    <Header/>
    <v-content class="section" role="main">
      <v-container fluid fill-height class="login-box">
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Auth/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "AuthBase",
  components: {
    Header,
    Footer
  },
  mounted: function() {
    document.body.classList.add("login-page");
  },
  destroyed: function() {
    document.body.classList.remove("login-page");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.main {
  display: flex;
  flex: 1 0 auto;
  background: #f2f2f2;
}

.section {
  flex: 1 auto;
  padding: 0.7rem 0.5rem;
  display: flex;
  flex-flow: column wrap;
}

/deep/ .login-box {
      justify-content: flex-end;

  width: 680px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }

/deep/ .button-holder {
    justify-content: flex-end;
    margin-top: 15vh;
  }
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

/deep/ .v-form {
  margin: 3rem auto;
}

/deep/ .v-card {
  max-width: 450px;
  padding: 1rem 1.6rem;
}

@media screen and (max-width: 600px) {
  .v-form,
  .v-card {
    margin: 0 auto;
  }
}
</style>