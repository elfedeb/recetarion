<template>
  <div class="column flex xs12">
    <div class="flex">
      <h3>Billing</h3>
      <FAQExpansion :items="data.billing"/>
      <h3>Activation</h3>
      <FAQExpansion :items="data.activation"/>
      <h3>Installation</h3>
      <FAQExpansion :items="data.installation"/>
    </div>
  </div>
</template>
  

<script>
import FAQExpansion from "@/components/ui/FAQExpansion.vue";
import dataFAQ from "@/data/data-faq-full.js";

export default {
  name: "Home",
  components: {
    FAQExpansion
  },
  data() {
    return {
      data: dataFAQ,
      selectedCategory: this.$route.query.tag
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
