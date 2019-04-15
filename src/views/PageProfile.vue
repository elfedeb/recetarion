<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex m4">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h3 class="m-0">My Info</h3>
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
                <h3 class="m-0">Home Info</h3>
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
      <div class="column flex m4">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h3 class="m-0">Contact</h3>
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
                <h3 class="m-0">FAQ</h3>
                <div>
                  <v-autocomplete
                    v-model="model"
                    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
                    :items="states"
                    :readonly="!isEditing"
                    :label="`Search`"
                    persistent-hint
                    prepend-icon="search"
                  >
                    <template v-slot:append-outer>
                      <v-slide-x-reverse-transition mode="out-in">
                        <v-icon
                          :key="`icon-${isEditing}`"
                          :color="isEditing ? 'success' : 'info'"
                          @click="isEditing = !isEditing"
                          v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                        ></v-icon>
                      </v-slide-x-reverse-transition>
                    </template>
                  </v-autocomplete>
                  
                </div>
              </v-flex>
            </v-card-title>
          </v-card>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>
  

<script>
export default {
  name: "PageProfile",
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
        { label: "Price", info: "$4,50" },
        { label: "Program", info: "Buy the power" }
      ],
      contactData: [
        { label: "Email", info: "rmontgomery@gmail.com" },
        { label: "Phone", info: "(949) 123-4567" },
        { label: "Address", info: "11543 Sunstreet Irvine, CA 92618" },
        { label: "Update by", info: "Email" }
      ],
      faqData: [
        { label: "Email", info: "rmontgomery@gmail.com" },
        { label: "Phone", info: "(949) 123-4567" },
        { label: "Address", info: "11543 Sunstreet Irvine, CA 92618" },
        { label: "Update by", info: "Email" }
      ],
      isEditing: false,
      model: null,
      states: [
        "Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin",
        "Wyoming"
      ]
    };
  },
  methods: {
    todoStatus() {
      console.log("🧾 ✅Something clicked");
    }
  }
};
</script>

// <style lang="scss" scoped>
//
</style>
