<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex sm6">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h6 class="card-title">My Info</h6>
                <div>
                  <v-list>
                    <v-list-tile v-for="f in myInfoData" :key="f.label" @click="todoStatus">
                      <v-list-tile-sub-title v-text="f.label"></v-list-tile-sub-title>
                      <v-list-tile-title v-text="f.info"></v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>
            </v-card-title>
          </v-card>
        </div>
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h6 class="card-title">Home Info</h6>
                <div>
                  <v-list>
                    <v-list-tile v-for="f in homeInfoData" :key="f.label" @click="todoStatus">
                      <v-list-tile-sub-title v-text="f.label"></v-list-tile-sub-title>
                      <v-list-tile-title v-text="f.info"></v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>
            </v-card-title>
          </v-card>
        </div>
      </div>
      <div class="column flex sm6">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h6 class="card-title">Contact</h6>
                <div>
                  <v-list>
                    <v-list-tile v-for="f in contactData" :key="f.label" @click="todoStatus">
                      <v-list-tile-sub-title v-text="f.label"></v-list-tile-sub-title>
                      <v-list-tile-title v-text="f.info"></v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </div>
              </v-flex>
            </v-card-title>
          </v-card>
        </div>
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h6 class="card-title">FAQ</h6>
                <v-flex>
                  <v-autocomplete
                    box
                    v-model="helpmodel"
                    :items="helpitems"
                    :label="`Search`"
                    hide-no-data
                    prepend-inner-icon="search"
                  ></v-autocomplete>
                </v-flex>
              </v-flex>
              <v-flex xs12>
                <v-card flat>
                  <FAQExpansion :items="faqItems"/>
                </v-card>
              </v-flex>
            </v-card-title>
          </v-card>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>
  

<script>
import FAQExpansion from "@/components/ui/FAQExpansion.vue";

export default {
  name: "PageProfile",
  components: {
    FAQExpansion
  },
  data() {
    return {
      myInfoData: [
        { label: "Account #", info: "1234134" },
        { label: "Name", info: "Robert J. Montgomery" },
        { label: "Birthday", info: "Jan 21, 1956" },
        { label: "Username", info: "rmontgomery" },
        { label: "Password", info: "********" }
      ],
      homeInfoData: [
        { label: "Activation date", info: "Jan 26, 2019" },
        { label: "Community", info: "Eclipse at Altair" },
        { label: "Location", info: "Roundabout St. Sesame" },
        { label: "Panels", info: "5" },
        { label: "Price", info: "$4,500" },
        { label: "Program", info: "Buy the power" }
      ],
      contactData: [
        { label: "Email", info: "rmontgomery@gmail.com" },
        { label: "Phone", info: "(949) 123-4567" },
        { label: "Address", info: "11543 Sunstreet Irvine, CA 92618" },
        { label: "Update by", info: "Email" }
      ],
      faqItems: [
        {
          question: "What is one plus one?",
          answer: "Forty two"
        },
        {
          question: "Where can I get a real question?",
          answer: "By intersecting different curiosities and realities"
        }
      ],
      isEditing: false,
      helpmodel: null,
      helpitems: ["FAQ", "How to login", "How to sign up"]
    };
  },
  methods: {
    todoStatus() {
      console.log("🧾 ✅Something clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
h3 + div > .v-autocomplete {
  margin: 8px -4px 0;
}
main.v-content {
  .v-list {
    margin: 0 -8px;
    > div:not(:last-of-type) {
      border-bottom: 1px solid #ccc;
    }
    .v-list__tile__sub-title {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
  .v-list__tile {
    padding: 0 8px;
  }
}
</style>
