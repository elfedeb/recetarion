<template>
  <div class="app-warp">
    <!-- <MainAside/> -->
    <Header/>
    <MainSection>
      <router-view/>
    </MainSection>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
// import MainAside from "@/components/layout/MainAside.vue";
import MainSection from "@/components/layout/MainSection.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    // MainAside,
    MainSection,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>