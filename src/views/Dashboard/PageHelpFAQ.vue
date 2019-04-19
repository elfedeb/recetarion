<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex xs12">
        <div class="flex">
          <v-card flat flex xs12>
            <v-breadcrumbs :items="breadcrumbs">
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
                <FAQExpansion :items="faqItems"/>
              </v-card>
            </v-card-title>
            <v-card-title class="faq-card">
              <h3>Activation</h3>
              <v-card flat>
                <FAQExpansion :items="faqItems"/>
              </v-card>
            </v-card-title>
            <v-card-title class="faq-card">
              <h3>Installation</h3>
              <v-card flat>
                <FAQExpansion :items="faqItems"/>
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
import ItemCard from "@/components/ui/ItemCard.vue";
// import dataFAQ from "@/data/data-faqs.js";

export default {
  name: "PageHelpFAQ",
  components: {
    FAQExpansion,
    "item-card": ItemCard
  },
  data() {
    return {
      // data: dataFAQ,
      faqItems: [
        {
          question: "What is one plus one?",
          answer:
            '<p>Donec commodo erat sed nibh blandit, sed lobortis orci vestibulum. Duis pulvinar eu orci nec ornare. Cras convallis ornare dolor, eu <a href="#!">euismod nulla mollis sit amet</a>. In congue elit ac felis dapibus tempus. Sed vel leo eget metus luctus feugiat. Aenean id lacus nec nibh imperdiet laoreet. Sed accumsan a metus ac pellentesque.</p> <p>Vestibulum eget tortor in magna tristique interdum vitae at orci. Suspendisse ac nibh in mi tincidunt eleifend quis quis odio. Nullam at elit malesuada, aliquam mi a, vulputate urna. Nullam auctor lectus interdum pharetra egestas. Maecenas vestibulum lacinia posuere. Aliquam auctor nunc lorem, et interdum ipsum pulvinar vitae. Nulla elit dolor, laoreet eget tellus nec, fermentum tristique dui.</p>'
        },
        {
          question: "Where can I get a real question?",
          answer: "By intersecting different curiosities and realities"
        }
      ],
      selectedCategory: this.$route.query.tag,
      breadcrumbs: [
        {
          text: "Help",
          disabled: false,
          href: "/help"
        },
        {
          text: "Documents",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
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
