<template>
    <TheLayout>
      <template v-slot:header>
        <TheHeader/>
      </template>

      <template v-slot:main>
        <MainAside/>

        <MainSection>
          <template>
            <slot>
              <h1>Help</h1>
            </slot>
          </template>
        </MainSection>
        
      </template>

      <template v-slot:footer>
        <TheFooter/>
      </template>
    </TheLayout>
</template>

<script>
// @ is an alias to /src
import TheLayout from "@/components/layout/TheLayout.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import MainAside from "@/components/layout/MainAside.vue";
import MainSection from "@/components/layout/MainSection.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "HelpPage",
  components: {
    TheLayout,
    TheHeader,
    MainAside,
    MainSection,
    TheFooter
  }
};
</script>