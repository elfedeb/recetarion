<template>
  <v-app class="application--wrap">
    <MainAside/>
    <Header/>
    <MainSection>
      <router-view/>
    </MainSection>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Dashboard/Header.vue";
import MainAside from "@/components/layout/Dashboard/MainAside.vue";
import MainSection from "@/components/layout/Dashboard/MainSection.vue";
import Footer from "@/components/layout/Footer.vue";
import { mapState, mapActions } from 'vuex';

export default {
  name: "DashboardBase",
  components: {
    Header,
    MainAside,
    MainSection,
    Footer
  },
  mounted() {
    this.$store.dispatch('getCustomer', this.$store.state.user.attributes['custom:external_id']);
    console.log('User', this.$store.state.user);
  },
  data() {
    return {
    }
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
</style>