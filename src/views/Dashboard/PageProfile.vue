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
                    <v-list-tile v-for="f in myInfoData" :key="f.label">
                      <v-list-tile-sub-title v-text="f.label"></v-list-tile-sub-title>
                      <v-list-tile-title v-text="f.info"></v-list-tile-title>
                      <v-list-tile-action v-if="f.editable" @click.stop="dialog = true">
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">edit</v-icon>
                        </v-btn>
                      </v-list-tile-action>
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
                  <div class="program-extra-info">
                    <ul>
                      <li>No Upfront Costs</li>
                      <li>20% Discounted Rate On Solar Energy Produced For The Next 20 Years</li>
                      <li>Maintenance Included</li>
                    </ul>
                    <p class="caption">
                      * All prices subject to change.
                      <br>**SunStreet makes no representation regarding the availability or amount of any tax credit. Please consult your tax advisor.
                    </p>
                  </div>
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

    <v-dialog v-model="dialog" persistent max-width="320px">
      <v-card>
        <v-card-title>
          <h6 class="card-title">Edit birthday</h6>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12>
              <v-flex xs12>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Birthday"
                      append-icon="event"
                      readonly
                      outline
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        { label: "Account #", info: "1234134", editable: false },
        { label: "Name", info: "Robert J. Montgomery", editable: false },
        { label: "Birthday", info: "Jan 21, 1956", editable: true },
        { label: "Username", info: "rmontgomery", editable: true },
        { label: "Password", info: "********", editable: true }
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
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
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
.v-dialog {
  .card-title {
    margin: 0;
  }
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
    /deep/ .v-list__tile {
      padding: 0 8px;
    }
  }
  .v-list__tile__action {
    position: absolute;
    right: -24px;
    .v-btn--icon {
      background: #fff;
    }
  }
  .program-extra-info {
    .caption {
      margin: 4rem 0 0;
    }
  }
}
</style>
