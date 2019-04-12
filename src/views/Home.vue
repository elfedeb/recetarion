<template>
  <v-card>
    <v-card-title>
      <div>
        <BaseStepper/>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import BaseStepper from "@/components/ui/BaseStepper.vue";

export default {
  name: "Home",
  components: {
    BaseStepper
  }
};
</script>