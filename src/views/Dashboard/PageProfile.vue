<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex sm12 md6">
          <CustomerInfoCard v-if="customer" :user='user' :customer='customer' @customer-updated="customerUpdated" editable=true />
      </div>
      <div class="column flex sm12 md6">
          <ContractInfoCard v-if="customer" :user='user' :contract='selectedContract' />
      </div>
      <div class="column flex sm12">
          <ProgramInfoCard v-if="selectedContract" :contract='selectedContract' />
      </div>
    </v-layout>
  </v-container>
</template>
  
<script>
import FAQExpansion from "@/components/ui/FAQExpansion.vue";
import CustomerInfoCard from "@/components/CustomerInfoCard.vue";
import ContractInfoCard from "@/components/ContractInfoCard.vue";
import ProgramInfoCard from "@/components/ProgramInfoCard.vue";
import { mapState, mapActions } from 'vuex';

export default {
  name: "PageProfile",
  components: {
    FAQExpansion,
    CustomerInfoCard,
    ContractInfoCard,
    ProgramInfoCard,
  },
  computed: {
    ...mapState(['customer','user','selectedContract']),
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    ...mapActions(['updateCustomer','getCustomer']),
    todoStatus() {
      console.log("🧾 ✅Something clicked");
    },
    customerUpdated() {
      this.updateCustomer(this.$router);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
