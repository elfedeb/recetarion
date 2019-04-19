<template>
  <v-container fluid grid-list-lg>
    <v-layout row fill-height wrap>
      <div class="column flex xs12">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h6 class="card-title">Help</h6>

                <v-layout row fill-height wrap>
                  <v-flex sm6>
                    <v-autocomplete
                      box
                      v-model="helpmodel"
                      :items="helpitems"
                      :label="`Find help... `"
                      hide-no-data
                      prepend-inner-icon="search"
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
                  </v-flex>
                  <v-flex xs12 sm3 d-flex>
                    <v-autocomplete
                      box
                      v-model="docmodel"
                      :items="doctype"
                      :label="`Type`"
                      hide-no-data
                      hide-details
                    >
                    </v-autocomplete>
                  </v-flex>

                  <v-flex xs12 sm3 d-flex>
                    <v-autocomplete
                      box
                      v-model="sortmodel"
                      :items="sorttype"
                      :label="`Sort by`"
                      hide-no-data
                      hide-details
                    >
                    </v-autocomplete>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-card-title>
          </v-card>
        </div>
      </div>
    </v-layout>
    <v-layout row fill-height wrap>
      <div class="column flex m4">
        <div class="flex">
          <v-card flat flex xs12>
            <v-card-title primary-title>
              <v-flex xs12>
                <h6 class="card-title">Documents</h6>
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
                        <!-- <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title> -->
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">chevron_right</v-icon>
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
                <h6 class="card-title">FAQ</h6>
                <div>
                  <v-list>
                    <v-list-tile avatar v-for="f in faqData" :key="f.title" @click="todoStatus">
                      <v-list-tile-avatar>
                        <v-icon :class="[f.iconClass]">{{ f.icon }}</v-icon>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-text="f.title"></v-list-tile-title>
                        <!-- <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title> -->
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">chevron_right</v-icon>
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
                <h6 class="card-title">Videos</h6>
                <div>
                  <v-list>
                    <v-list-tile avatar v-for="f in videosData" :key="f.title" @click="todoStatus">
                      <v-list-tile-avatar>
                        <v-icon :class="[f.iconClass]">{{ f.icon }}</v-icon>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-text="f.title"></v-list-tile-title>
                        <!-- <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title> -->
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">chevron_right</v-icon>
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
                <h6 class="card-title">Links</h6>
                <div>
                  <v-list>
                    <v-list-tile avatar v-for="f in linksData" :key="f.title" @click="todoStatus">
                      <v-list-tile-avatar>
                        <v-icon :class="[f.iconClass]">{{ f.icon }}</v-icon>
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <v-list-tile-title v-text="f.title"></v-list-tile-title>
                        <!-- <v-list-tile-sub-title v-text="f.subtitle"></v-list-tile-sub-title> -->
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon color="grey lighten-1">chevron_right</v-icon>
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
          iconClass: "",
          title: "Folder",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "",
          title: "Folder 2",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "description",
          iconClass: "",
          title: "Document",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "description",
          iconClass: "",
          title: "Document copy",
          subtitle: "Jan 28, 2014"
        }
      ],
      faqData: [
        {
          icon: "help",
          iconClass: "",
          title: "Activations",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "help",
          iconClass: "",
          title: "Sistem monitoring",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "help",
          iconClass: "",
          title: "Billing",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "help",
          iconClass: "",
          title: "Tentants/Renters",
          subtitle: "Jan 28, 2014"
        }
      ],
      videosData: [
        {
          icon: "play_circle_filled",
          iconClass: "",
          title: "Getting started",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "play_circle_filled",
          iconClass: "",
          title: "First setup",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "play_circle_filled",
          iconClass: "",
          title: "How to check your Dashboard",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "play_circle_filled",
          iconClass: "",
          title: "Paying online",
          subtitle: "Jan 28, 2014"
        }
      ],
      linksData: [
        {
          icon: "info",
          iconClass: "",
          title: "Info on how to save energy",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "info",
          iconClass: "",
          title: "Renewable energy is here to stay",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "info",
          iconClass: "",
          title: "From the sun to your kitchen",
          subtitle: "Jan 17, 2014"
        }
      ],
      isEditing: false,
      helpmodel: null,
      docmodel: null,
      sortmodel: null,
      doctype: ["Document", "Image", "Spreadsheet", "PDF"],
      sorttype: ["Ascending", "Descending", "Alphabetical"],
      helpitems: [
        "FAQ",
        "How to login",
        "How to sign up"
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

<style lang="scss">
main.v-content {
  .help-search {
    width: 100%;
  }
  .v-list {
    margin: 0px -20px -16px -8px;
  }
  a.v-list__tile.v-list__tile--link.v-list__tile--avatar {
    padding: 0;
  }

  .v-list > div:not(:last-of-type) {
    .v-list__tile.v-list__tile--link .v-list__tile__content,
    .v-list__tile__content
      ~ .v-list__tile__action:not(.v-list__tile__action--stack) {
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
</style>
