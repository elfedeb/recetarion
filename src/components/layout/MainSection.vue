<template>
  <section class="section" role="main">
    <v-card>
      <v-card-title>
        <div>
          <BaseStepper/>
        </div>
      </v-card-title>
    </v-card>
  </section>
</template>


<script>
// @ is an alias to /src
import BaseStepper from "@/components/ui/BaseStepper.vue";

export default {
  name: "MainSection",
  components: {
    BaseStepper
  }
};
</script>

<style lang="scss" scoped>
.section {
    flex: 1 auto;
    padding: 0.7rem 0.5rem;
    display: flex;
    flex-flow: column wrap;
  }
</style>
