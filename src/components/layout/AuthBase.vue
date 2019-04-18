<template>
  <v-app class="application--wrap">
    <Header/>
    <MainSection>
      <router-view/>
    </MainSection>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Auth/Header.vue";
import MainSection from "@/components/layout/Auth/MainSection.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "DashboardBase",
  components: {
    Header,
    MainSection,
    Footer
  },
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
@import "@/assets/scss/main.scss";
.main {
  display: flex;
  flex: 1 0 auto;
  background: #f2f2f2;
}
</style>