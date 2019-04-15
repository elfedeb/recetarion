<template>
  <v-content class="section" role="main">
    <v-container fluid fill-height fill-width>
      <v-layout justify-center align-center>
        <v-flex fill-width>
          <slot></slot>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script>
export default {
  name: "MainSection"
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
