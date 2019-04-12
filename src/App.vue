<template>
  <v-app>
    <TheLayout>
      <template v-slot:header>
        <TheHeader/>
      </template>

      <template v-slot:main>
        <TheMainAside/>

        <TheMainSection>
          <v-content>
            <router-view/>
          </v-content>
        </TheMainSection>
      </template>

      <template v-slot:footer>
        <TheFooter/>
      </template>
    </TheLayout>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TheLayout from "@/components/layout/TheLayout.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheMainAside from "@/components/layout/TheMainAside.vue";
import TheMainSection from "@/components/layout/TheMainSection.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheLayout,
    TheHeader,
    TheMainAside,
    TheMainSection,
    TheFooter
  }
};
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";
</style>





