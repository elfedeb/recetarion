<template>
  <v-container grid-list-lg>
    <v-layout column wrap>
      <div class="flex xs12">
        <v-card flat flex xs12>
          <v-card-title primary-title>
            <v-flex xs12>
              <h3 class="m-0">To-dos</h3>
              <div>
                <v-list>
                  <v-list-tile v-for="item in todosItems" :key="item.title" @click="todoStatus">
                    <v-list-tile-action>
                      <v-icon>radio_button_unchecked</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </div>
      <div class="flex xs12">
        <v-card flat flex xs12>
          <v-card-title primary-title>
            <v-flex xs12>
              <h3 class="m-0">Completed</h3>
              <div>
                <v-list>
                  <v-list-tile v-for="item in doneItems" :key="item.title" @click="todoStatus">
                    <v-list-tile-action>
                      <v-icon>done</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </div>
    </v-layout>
  </v-container>
</template>
  

<script>
export default {
  name: "PageToDos",
  data() {
    return {
      todosItems: [
        { title: "Step 01" },
        { title: "Step 02" },
        { title: "Step 03" },
        { title: "Step 04" }
      ],
      doneItems: [
        { title: "Done Step 01" },
        { title: "Done Step 02" },
        { title: "Done Step 03" },
        { title: "Done Step 04" }
      ]
    };
  },
  methods: {
    todoStatus() {
      console.log("🧾 ✅Todo list clicked");
    }
  }
};
</script>

// <style lang="scss" scoped>
//
</style>
