<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex m4">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h3 class="m-0">Documents</h3>
                <div>
                  <v-list>
                    <v-list-tile
                      avatar
                      v-for="f in documentsData"
                      :key="f.title"
                      @click="todoStatus"
                    >
                      <v-list-tile-avatar>
                        <v-icon :class="[f.iconClass]">{{ f.icon }}</v-icon>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-text="f.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">info</v-icon>
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
                <h3 class="m-0">FAQ</h3>
                <div>
                  <v-list>
                    <v-list-tile
                      avatar
                      v-for="f in faqData"
                      :key="f.title"
                      @click="todoStatus"
                    >
                      <v-list-tile-avatar>
                        <v-icon :class="[f.iconClass]">{{ f.icon }}</v-icon>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-text="f.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">info</v-icon>
                        </v-btn>
                      </v-list-tile-action>
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
                <h3 class="m-0">Videos</h3>
                <div>
                  <v-list>
                    <v-list-tile
                      avatar
                      v-for="f in videosData"
                      :key="f.title"
                      @click="todoStatus"
                    >
                      <v-list-tile-avatar>
                        <v-icon :class="[f.iconClass]">{{ f.icon }}</v-icon>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-text="f.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">info</v-icon>
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
                <h3 class="m-0">Links</h3>
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
  name: "PageHelp",
  data() {
    return {
      documentsData: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Folder",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Folder 2",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "description",
          iconClass: "grey lighten-1 white--text",
          title: "Document",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "description",
          iconClass: "grey lighten-1 white--text",
          title: "Document copy",
          subtitle: "Jan 28, 2014"
        }
      ],
      faqData: [
        {
          icon: "help",
          iconClass: "grey lighten-1 white--text",
          title: "Activations",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "help",
          iconClass: "grey lighten-1 white--text",
          title: "Sistem monitoring",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "help",
          iconClass: "grey lighten-1 white--text",
          title: "Billing",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "help",
          iconClass: "grey lighten-1 white--text",
          title: "Tentants/Renters",
          subtitle: "Jan 28, 2014"
        }
      ],
      videosData: [
        {
          icon: "play_arrow",
          iconClass: "grey lighten-1 white--text",
          title: "Getting started",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "play_arrow",
          iconClass: "grey lighten-1 white--text",
          title: "First setup",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "play_arrow",
          iconClass: "grey lighten-1 white--text",
          title: "How to check your Dashboard",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "play_arrow",
          iconClass: "grey lighten-1 white--text",
          title: "Paying online",
          subtitle: "Jan 28, 2014"
        }
      ],
      linksData: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Info on how to save energy",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Renewable energy is here to stay",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "From the sun to your kitchen",
          subtitle: "Jan 17, 2014"
        }
      ],
      isEditing: false,
      model: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
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
