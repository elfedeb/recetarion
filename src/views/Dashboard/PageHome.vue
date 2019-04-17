<template>
  <v-container fluid grid-list-lg>
    <v-layout column wrap>
      <BaseStepper/>
    </v-layout>
  </v-container>
</template>

<script>
import BaseStepper from "@/components/ui/BaseStepper.vue";

export default {
  name: "PageHome",
  components: {
    BaseStepper
  }
};
</script>