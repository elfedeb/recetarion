<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(items , i) in items" :key="i">
      <template v-slot:header>
        <h4>{{ items.question }}</h4>
      </template>
      <v-card>
        <v-card-text v-html="items.answer"></v-card-text>
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