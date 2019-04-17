<template>
  <div class="flex xs12 fluid">
    <v-alert
      v-model="alert"
      dismissible
      type="success"
      color="lennar-alert"
      icon="warning"
    >This is a success alert that is closable.</v-alert>

    <v-stepper v-model="pageActivation" vertical class="journey-stepper">
      <!---------------- WELCOME ----------------->
      <v-stepper-step :complete="true" step="1" @click="pageActivation = 1">
        <v-layout xs12 row class="full-width" wrap>
          <v-flex xs12 md3>
            <h3 class="v-stepper-label__header">Welcome</h3>
          </v-flex>
          <v-flex xs12 md9>
            <span
              class="body-2 font-weight-thin"
            >Learn about your solar system and the Sunstreet program</span>
          </v-flex>
        </v-layout>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>
      <!------------------------------------------->

      <!---------------- PRE-CLOSING -------------->
      <v-stepper-step :complete="true" step="2" @click="pageActivation = 2">
        <v-layout xs12 row class="full-width" wrap>
          <v-flex xs12 md3>
            <h3 class="v-stepper-label__header">Pre-closing</h3>
          </v-flex>
          <v-flex xs12 md9>
            <span class="body-2 font-weight-thin">Learn about pre-closing</span>
          </v-flex>
        </v-layout>
      </v-stepper-step>

      <v-stepper-content step="2">
        <h3>Videos</h3>
        <v-layout wrap>
          <v-flex xs12 sm6 md4 lg3>
            <v-hover>
              <v-card
                flat
                @click.stop="dialog = true"
                slot-scope="{ hover }"
                :class="`elev elevation-${hover ? 4 : 0}`"
                class="mx-auto"
              >
                <v-card-title>
                  <h4>How solar works</h4>
                </v-card-title>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                <v-card-text>
                  <div>
                    <div>Learn how your New Home with Solar produces and consumes energy.</div>
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs12 sm6 md4 lg3>
            <v-hover>
              <v-card
                flat
                @click.stop="dialog = true"
                slot-scope="{ hover }"
                :class="`elev elevation-${hover ? 4 : 0}`"
                class="mx-auto"
              >
                <v-card-title>
                  <h4>How solar works</h4>
                </v-card-title>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                <v-card-text>
                  <div>
                    <div>Learn how your New Home with Solar produces and consumes energy.</div>
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs12 sm6 md4 lg3>
            <v-hover>
              <v-card
                flat
                @click.stop="dialog = true"
                slot-scope="{ hover }"
                :class="`elev elevation-${hover ? 4 : 0}`"
                class="mx-auto"
              >
                <v-card-title>
                  <h4>How solar works</h4>
                </v-card-title>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                <v-card-text>
                  <div>
                    <div>Learn how your New Home with Solar produces and consumes energy.</div>
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
        <h3>FAQ</h3>
        <v-card flat>
          <FAQExpansion :items="faqItems" />
        </v-card>
      </v-stepper-content>
      <!------------------------------------------->

      <!---------- PERMISSION TO OPERATE ---------->
      <v-stepper-step :complete="false" step="3" @click="pageActivation = 3">
        <v-layout xs12 row class="full-width" wrap>
          <v-flex xs12 md3>
            <h3 class="v-stepper-label__header">Permission to operate</h3>
          </v-flex>
          <v-flex xs12 md9>
            <span class="body-2 font-weight-thin">Must complete the previous phases to unlock this</span>
          </v-flex>
        </v-layout>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>
      <!-------------------------------------------->

      <!---------------- ACTIVATION ------0--------->
      <v-stepper-step :complete="false" step="4" @click="pageActivation = 4">
        <v-layout xs12 row class="full-width" wrap>
          <v-flex xs12 md3>
            <h3 class="v-stepper-label__header">Activation</h3>
          </v-flex>
          <v-flex xs12 md9>
            <span class="body-2 font-weight-thin">Must complete the previous phases to unlock this</span>
          </v-flex>
        </v-layout>
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      </v-stepper-content>
      <!------------------------------------------->
    </v-stepper>

    <v-dialog v-model="dialog" max-width="592">
      <videoPlayer :header="videoItems.header" :url="videoItems.url" :info="videoItems.info"/>
    </v-dialog>
  </div>
</template>

<script>
import VideoPlayer from "@/components/ui/VideoPlayer.vue";
import FAQExpansion from "@/components/ui/FAQExpansion.vue";

export default {
  name: "BaseStepper",
  components: {
    FAQExpansion,
    VideoPlayer
  },
  data() {
    return {
      // opens third page
      pageActivation: 2,
      videoItems: {
        header: "Video header",
        url: "https://www.youtube.com/embed/d4UUKB4buVc",
        info: "Info about this video below to explain features"
      },
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
      dialog: false,
      alert: true
    };
  }
};
</script>

<style lang="scss">
.v-stepper__label {
  width: 100%;
}
.v-stepper-label__header {
  font-size: 15px;
}
.v-stepper__content {
  .v-card__title {
    padding: 12px;
    color: #393939;
  }
  h3 {
    color: #696969;
    margin: 2rem 0;
  }
}
</style>
