<template>
  <v-container fluid grid-list-lg>
    <BaseStepper/>
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