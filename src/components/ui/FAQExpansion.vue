<template>
  <div class="FAQExpansion">
    <div class="furr" v-for="(items , i) in items" :key="i">

      <template slot:header>
        <h4>{{ items.question }}</h4>
      </template>
        <p v-html="items.answer"></p>
    </div>
    </div>
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