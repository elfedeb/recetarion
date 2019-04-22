<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex xs12">
        <div class="flex">
          <v-card flat flex xs12>
            <v-breadcrumbs :items="data.breadcrumbs">
              <template v-slot:divider>
                <v-icon>chevron_right</v-icon>
              </template>
            </v-breadcrumbs>
            <hr>

            <v-flex class="help-card-filter-header">
              <v-icon>arrow_upward</v-icon>File name
            </v-flex>
            <hr>
            <v-card-title class="faq-card">
              <h3>Billing</h3>
              <v-card flat>
                <FAQExpansion :items="data.billing"/>
              </v-card>
            </v-card-title>
            <v-card-title class="faq-card">
              <h3>Activation</h3>
              <v-card flat>
                <FAQExpansion :items="data.activation"/>
              </v-card>
            </v-card-title>
            <v-card-title class="faq-card">
              <h3>Installation</h3>
              <v-card flat>
                <FAQExpansion :items="data.installation"/>
              </v-card>
            </v-card-title>
          </v-card>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>
  

<script>
import FAQExpansion from "@/components/ui/FAQExpansion.vue";
// import dataFAQ from "@/data/data-faq.js";
import dataFAQ from "@/data/data-faq-full.js";

export default {
  name: "PageHelpFAQ",
  components: {
    FAQExpansion
  },
  data() {
    return {
      data: dataFAQ,
      selectedCategory: this.$route.query.tag,
    };
  }
};
</script>

<style lang="scss" scoped>
.theme--light.v-breadcrumbs {
  a {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  .v-breadcrumbs__divider .v-icon {
    font-size: 24px;
  }
  .v-breadcrumbs__item--disabled {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
  }
}

.help-card-filter-header {
  padding: 12px !important;
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  text-transform: capitalize;
  .v-icon {
    margin-bottom: -3px;
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.87);
  }
}

.faq-card {
  > .v-card {
    width: 100%;
  }
  h3 {
    color: #696969;
    margin: 0 0 1rem;
  }
}
</style>
