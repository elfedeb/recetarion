<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(faq , i) in items" :key="i">
      <template v-slot:header>
        <h4>{{ faq.question }}</h4>
      </template>
      <v-card>
        <v-card-text v-html="faq.answer"></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "FAQExpansion",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  .v-expansion-panel {
    background: transparent;
    box-shadow: none;
    .v-expansion-panel__container {
      background: transparent;
    }
    h4 {
      color: #313a64;
      margin-left: -8px;
    }
  }
}
</style>
