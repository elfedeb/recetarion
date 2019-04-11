<template>
  <section class="section" role="main">
    <!-- <div class="card large">
      <div class="card-content">
        <h4>To-do list title</h4>
        
      </div>
    </div> -->

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
